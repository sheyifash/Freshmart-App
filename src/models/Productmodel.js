const mongoose = require("mongoose")
const Category = require("./Categorymodel")
const productSchema = new mongoose.Schema({
    productName:{type:String, required:true},
    price:{type:Number, required:true},
    stock:{type:Number, required:true},
    serial:{type:Number, required:true},
    category:{type:mongoose.Schema.Types.ObjectId,
        ref:Category,
        required:true
    },
    imageUrl:{type:String, default:""}
},{timestamps:true})
const Product = new mongoose.model("Product", productSchema)
module.exports = Product