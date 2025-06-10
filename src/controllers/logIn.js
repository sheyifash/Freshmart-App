const Auth = require("../models/Authmodel")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const logIn = async(req, res) => {
    try {
        const {email, password} = req.body
        req.user = user
     const accessToken = jwt.sign(
        {id:user?._id, role:user.role},
        process.env.ACCESS_TOKEN,
        {expiresIn:"5m"}
     )

     const refreshToken = jwt.sign(
        {id:user?._id},
        process.env.REFRESH_TOKEN,
        {expiresIn:"30m"}
     )
        res.status(200).json({message:"login success!",
            user:email,
            accessToken,
            refreshToken,
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {logIn}