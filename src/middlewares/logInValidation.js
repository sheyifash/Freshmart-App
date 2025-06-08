const jwt = require ("jsonwebtoken")
const { validateUser } = require("../services/findUser")
const dotenv = require("dotenv")
dotenv.config()
const validatelogIn = async(req, res, next) => {
     const {email, password} = req.body
     const user = await validateUser()
     if (!user) {
        return res.status(404).json("user does not exist!")
     }
     const isMatch = await bcrypt.compare(Password, user?.password)
     if (!isMatch) {
        return res.status(400).json("invalid email or password")
     }
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
     next()
}
module.exports = {validatelogIn}
