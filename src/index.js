const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const routes = require("./routers")
const authRoutes = require("./routers/authRoutes")
const productRoutes = require("./routers/productRoutes")
const browserRoutes = require("./routers/browserRoutes")
const createOrder = require("./routers/createOrder")
dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/logIn", authRoutes)
app.use("/api/update", productRoutes)
app.use("/api", browserRoutes)
app.use("/api", createOrder)
app.use("/api", authRoutes)
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URL)
.then( () => {
    console.log("app now connected...")
    app.listen(PORT, () => {
        console.log(PORT)
        console.log(`app now listening at ${PORT}`)
    })
})
app.get("/test", (req, res) => {
  res.send("Server is working");
});


