const express = require("express")
const authorization = require("../middlewares/authorization")
const allProducts = require("../controllers/AllProducts")
const searchProduct = require("../controllers/productSearch")
const viewOrders = require("../controllers/viewOrders")
const router = express.Router()

router.get("/all-products", authorization, allProducts)
router.get("/get-product/:_id", authorization, searchProduct)
router.get("/view-orders/:_id", authorization, viewOrders)

module.exports = router