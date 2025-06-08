const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")
const routes = require("./routers")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_URL)
.then( () => {
    console.log("app now connected...")
    app.listen(PORT, () => {
        console.log(`app now connected at ${PORT}`)
    })
})
app.use("/api", routes)