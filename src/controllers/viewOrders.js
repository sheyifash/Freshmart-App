const Order = require("../models/Ordermodel")
const Product = require("../models/Productmodel")

const viewOrders = async (req, res) => {
    try {
    const {_id} = req.params
    const getOrders = await Order.findById(_id)
    .populate (Product.products)
    .sort ({createdAt: -1})
    if (!getOrders) {
        res.status(400).json("orders not found!")
    }
    res.status(200).json({getOrders})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = viewOrders