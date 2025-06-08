const Auth = require("../models/Authmodel")
const logIn = async(req, res) => {
    try {
        const {email, password} = req.body
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