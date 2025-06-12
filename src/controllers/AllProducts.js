const Product = require("../models/Productmodel")

const allProducts = async(req, res) => {
    try {
    const products = await Product.find()
    if (!products) {
        res.status(404).json("No products found")
    }
    res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = allProducts