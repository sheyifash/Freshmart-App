const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    categoryName:{type:String, required:true},
    categoryCode:{type:String, default:""},
}, {timestamps:true})
const Category = new mongoose.model("Category", categorySchema)
module.exports = Category