const Product = require("../models/Productmodel")

const searchProduct = async(req, res) => {
    try {
        const { _Id} = req.params
    const getProduct = await Product.findById({_Id})
    if (!getProduct) {
        res.status(402).json("Not found")
    }
    res.status(200).json(getProduct)
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = {searchProduct}