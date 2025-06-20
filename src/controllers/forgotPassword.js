const Auth = require("../models/Authmodel")
const jwt = require ("jsonwebtoken")
const sendMail = require("../services/sendmail")

const forgotPassword = async(req, res) => {
    try {
        const {email} = req.body
        const user = await Auth.findOne({email})
        if (!user) {
            res.status(404).json("user does not exist!")
        }
        const accessToken =  jwt.sign(
            {user},
            `${process.env.ACCESS_TOKEN}`,
            { expiresIn:"5m" }
        )
        await sendMail(email, accessToken)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports =forgotPassword