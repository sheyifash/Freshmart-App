console.log("inside controller")
//const {findUser, validateUser} = require("../services/findUser")
const Auth = require("../models/Authmodel")

const validateRegistration = async(req, res, next) => {
    console.log("user saved")
    try {
        console.log("user saved")
    const {firstName, lastName, email, mobileNumber, otherMobile, location, password, role } = req.body
    const existingUser = await Auth.findOne({email})
        if (existingUser) {
            console.log("okay")
            return res.status(500).json("user already exists!")
        }
    const errors = []
    if (!email) errors.push("enter a valid email")
    if (!mobileNumber) errors.push("enter a valid mobile number")
    if (!role) errors.push("enter a valid role")
    const validPassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasSpecialChar = /[@!#$%^&*()_+=.,/]/.test(password)
        const hasAnInteger = /[0123456789]/.test(password)

        if(!hasUpperCase) return "password must include at least an uppercase"
        if(!hasLowerCase) return "password must have at least one lowercase"
        if(!hasSpecialChar) return "password must have at least one special character (@!#$%^&*()_+=.,/)"
        if(!hasAnInteger) return "password must have at least one integer (0123456789)"

        return null
    }
    const passwordError = validPassword(password);
    if (passwordError) {
      errors.push(passwordError);
    }
    if (errors.length > 0)
        return res.status(400).json({message:errors})
    
        next()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = validateRegistration