const Order = require("../models/Ordermodel")
const Product = require("../models/Productmodel")

const order = async(req, res) =>{
    try {
        const {user, items, location, paymentMethod, status} = req.body
        const subTotal = items.reduce((sum, item)=>{
            return sum + item.price * item.quantity
        },0)
        const shippingFee = (states) => {
            const rate = {
            lagos_island:1500,
            lagos_mainland:1000,
            ibadan:2000,
            oyo:2500,
            default:3000
            }
            return rate[states.toLowerCase()] || states.rate
        }
        const deliveryFee = shippingFee(location)
        const total = subTotal + deliveryFee
        const newOrder = new Order({
            user, 
            items, 
            location, 
            paymentMethod, 
            deliveryFee,
            total,
            status
        })
        await newOrder.save()
        res.status(200).json({message:"Order complete. checkout!",
            newOrder
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = order