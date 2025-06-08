const mongoose = require("mongoose")
const Auth = require("./Authmodel")
const Product = require("./Productmodel")
const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:Auth, required:true},
    items:[{product:{type:mongoose.Schema.Types.ObjectId, ref:Product, required:true},
        quantity:Number,
        price:Number
}],
location:{type:mongoose.Schema.Types.ObjectId, ref:Auth, required:true},
    status:{type:String, enum:["Pending","Shipped", "Out for delivery", "Delivered", "Cancelled"]},
    paymentMethod:{type:String, enum:["card", "USSD", "mobile transfer"], required:true},
    deliveryFee:{type:Number, default:0},
    total:{type:Number}
})
const Order = new mongoose.model("Order", orderSchema)
module.exports = Order
