const bcrypt = require("bcrypt")
const Auth = require("../models/Authmodel")
console.log("this is fine")
const register = async(req, res) => {
    try {
const{firstName, lastName, email, mobileNumber, otherMobile, location, password, role } = req.body
const hashedPassword = await bcrypt.hash(password, 12)
const newUser = new Auth({firstName, lastName, email, mobileNumber, otherMobile, location, password:hashedPassword, role})
await newUser.save()

res.status(201).json({message:"User account created successfully",
    newUser
})
}catch (error) {
    console.error("Registration error:", error.message); 
    res.status(500).json({ error: error.message });
  }
}

module.exports = register 