const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const routes = require("./routers")
const authRoutes = require("./routers/authRoutes")
const productRoutes = require("./routers/productRoutes")
dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/logIn", authRoutes)
app.use("/api/update", productRoutes)
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

console.log("let's try this")
