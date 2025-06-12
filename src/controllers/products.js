const Product = require("../models/Productmodel")

const updateProducts = async(req, res) => {
    try {
        const {productName, price, stock, serial, category, imageUrl} = req.body
        const newProduct = new Product({productName, price, stock, serial, category, imageUrl})
        await newProduct.save()
        res.status(200).json({message:"product table updated successfully!",
            newProduct
        })
    } catch (error) {
       res.status(500).json({error:error.message}) 
    }
}
module.exports = updateProducts