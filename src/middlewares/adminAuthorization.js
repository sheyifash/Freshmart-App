const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const Auth = require("../models/Authmodel")
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
    const user = await Auth.findById(decoded.Id)
    if (!user) {
        res.status(500).json("user does not exist. Please sign up!")
    }
    req.user = user
    if (user.role !== "admin") {
        res.status(500).json("Access Denied!")
    }
    next()
}
module.exports = {adminAuth}