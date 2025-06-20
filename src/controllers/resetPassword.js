const bcrypt = require("bcrypt")
const Auth = require("../models/Authmodel")
const resetPassword = async (req, res) =>{
    try {
        const { password} = req.body
        const user = await Auth.findOne({email:req.user.email})
        if (!user) {
            res.status(404).json("Not found!")
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        user.password =hashedPassword
        await user.save()
        res.status(200).json("successful!")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports=resetPassword