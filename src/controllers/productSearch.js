const Product = require("../models/Productmodel")

const searchProduct = async(req, res) => {
    try {
        const { _id} = req.params
        //const productId = req.params._id
    const getProduct = await Product.findById(_id)
    console.log(getProduct)
    if (!getProduct) {
       return res.status(402).json("Not found")
    }
    res.status(200).json(getProduct)
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = searchProduct