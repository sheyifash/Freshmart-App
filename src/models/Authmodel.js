const mongoose = require ("mongoose")
const authSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    mobileNumber:{type:Number, required:true},
    otherMobile:{type:Number, default:""},
    email:{type:String, required:true},
    password:{type:String, required:true},
    location:{
        address:{type:String, default:""},
        lga:{type:String, default:""},
        postalCode:{type:String, default:""},
        state:{type:String, default:""},
        country:{type:String, default:""}
    },
    role:{type:String, enum:["admin", "user"], default:"user"}
},{timestamps:true})
const Auth = new mongoose.model("Auth", authSchema)
module.exports = Auth