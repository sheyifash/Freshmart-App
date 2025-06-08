const express = require("express")
const {adminAuth} = require("../middlewares/adminAuthorization")
const {updateProducts} = require("../controllers/products")
const {createCategory} = require("../controllers/categories")
const router = express.Router()

router.post("./update-products", adminAuth, updateProducts)
router.post("./update-categories", adminAuth, createCategory)

module.exports = router