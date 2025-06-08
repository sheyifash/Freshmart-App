const express = require("express")
const {authorization} = require("../middlewares/authorization")
const {order} = require("../controllers/orders")
const router = express.Router()

router.post("/new/order", authorization, order)

module.exports = router