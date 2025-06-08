const findUser = require("../services/findUser")

const validateRegistration = async(req, res, next) => {
    try {
    const {firstName, lastName, email, mobileNumber, otherMobile, location, password, role } = req.body
    const errors = []
    if (!email) {
        return errors.push("enter a valid email")
    }
    if (!mobileNumber) {
        return errors.push("enter a valid mobile number")
    }
    if (!role) {
        return errors.push("enter a valid role")
    }
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
    const validatedPassword = validPassword(password)
    if (!validatedPassword) {
        return errors.push("enter a valid password!")
    }
    if (errors.length > 0)
        return res.status(400).json({message:errors})
    const existingUser = await findUser()
        if (existingUser) {
            return res.status(500).json("user already exists!")
        }
        next()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {validateRegistration}