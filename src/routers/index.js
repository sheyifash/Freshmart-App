const authRoutes = require("./authRoutes")
const productRoutes = require("./productRoutes")
const browserRoutes = require("./browserRoutes")
const createOrder = require("./createOrder")
const routes = [
    authRoutes,
    productRoutes,
    browserRoutes,
    createOrder
]

module.exports = routes