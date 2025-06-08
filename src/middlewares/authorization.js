const Auth = require("../models/Authmodel")
const jwt = require("jsonwebtoken")
const authorization = async(req, res, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(404).json("please sign in!")
    }
    const spliToken = token.split(" ")
    const realToken = spliToken[1]
    const decodeToken = jwt.verify(realToken, `${process.env.ACCESS_TOKEN}`)
    if (!decodeToken) {
        res.status(401).json("plesae sign in!")
    }
    const user = await Auth.findById(decodeToken.Id)
    if (!user) {
        res.status(400).json("user does not exist!")
    }
    console.log({token})
    req.user = user
    next()
}
module.exports = {authorization}