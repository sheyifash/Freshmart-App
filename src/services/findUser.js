const Auth = require("../models/Authmodel")
console.log("wahala")
/*const findUser = async(req, res, next) => {
    try {
    const { email } = req.body
    const existing = await Auth.findOne({email})
    if (existing) {
        console.log("fine")
       res.status(200).json(existing) 
    }
    next()

    } catch (error) {
        res.status(200).json({error:error.message}) 
    }}*/

const validateUser = async(req, res, next) => {
    const {email} = req.body
    const user = await Auth.findOne({email})
    if (user) {
         console.log("fine")
       return res.status(200).json(user) 
    }
    next()
}

module.exports = {
    //findUser
    validateUser
}