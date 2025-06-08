const Auth = require("../models/Authmodel")

const findUser = async(rea, res) => {
    const {firstName, lastName, email, mobileNumber, otherMobile, location, password, role } = req.body
    const existing = await Auth.findOne({email})
    return existing
}

const validateUser = async(req, res) => {
    const {email, password} = req.body
    const user = await Auth.findOne({email})
    return user
}
module.exports = {
    findUser,
    validateUser
}