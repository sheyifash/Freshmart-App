const jwt = require ("jsonwebtoken")
const bcrypt = require("bcrypt")
//const { validateUser } = require("../services/findUser")
const dotenv = require("dotenv")
const Auth = require("../models/Authmodel")
dotenv.config()
const validatelogIn = async(req, res, next) => {
     const {email, password} = req.body
     const user = await Auth.findOne({email:req.body.email})
     if (!user) {
       return res.status(404).json("user does not exist!")
     }
     const isMatch = await bcrypt.compare(password, user?.password)
     if (!isMatch) {
       return res.status(400).json("invalid email or password")
     }
      /*const accessToken = jwt.sign(
             {_id:user?._id, role:user.role},
             process.env.ACCESS_TOKEN,
             {expiresIn:"5m"}
          )
     
          const refreshToken = jwt.sign(
             {_id:user?._id},
             process.env.REFRESH_TOKEN,
             {expiresIn:"30m"}
          )
             res.status(200).json({message:"login success!",
                 user:email,
                 accessToken,
                 refreshToken,})*/
                 req.user = user
     next()
}
module.exports = validatelogIn
