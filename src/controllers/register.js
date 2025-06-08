const bcrypt = require("bcryptjs")
const Auth = require("../models/Authmodel")
const register = async(req, res) => {
    try {
const{firstName, lastName, email, mobileNumber, otherMobile, location, password, role } = req.body
const hashedPassword = await bcrypt.hash(password, 12)
const newUser = new Auth({firstName, lastName, email, mobileNumber, otherMobile, location, password:hashedPassword, role})
await newUser.save()
res.status(201).json("account created successfully!")
} catch (error) {
        res.status(404).json({error:error.message})
    }}

module.exports = {register}