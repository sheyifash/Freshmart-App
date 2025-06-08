const mongoose = require ("mongoose")
const authSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    mobileNumber:{type:Number, required:true},
    otherMobile:{type:Number, default:""},
    email:{type:String, required:true},
    location:{
        address:{type:String, required:true},
        lga:{type:String, required:true},
        postalCode:{type:String, default:""},
        state:{type:String, required:true},
        country:{type:String, required:true}
    },
    role:{type:String, enum:["admin", "user"], default:"user"}
})
const Auth = new mongoose.model("Auth", authSchema)
module.exports = Auth