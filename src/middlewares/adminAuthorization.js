const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const Auth = require("../models/Authmodel")
const { default: bcrypt } = require("bcryptjs")
const adminAuth = async(req, res, next) => {
    const token = req.header("Authorization")
    if (!token) {
        res.status(500).json("please login!")
    }
    const splitToken = token.split(" ")
    const realToken = splitToken[1]
    const decoded = jwt.verify(realToken, `${process.env.ACCESS_TOKEN}`)
    if (!decoded) {
        res.status(500).json("please signin!")
    }
    const user = await Auth.findOne({_id:decoded._id})
    if (!user) {
        res.status(500).json("user does not exist. Please sign up!")
    }
    req.user = user
    console.log(req.user)
   if (user.role !== "admin") {
  return res.status(403).json({ message: "Admins only. Access denied." });
}
    next()
}
module.exports = adminAuth