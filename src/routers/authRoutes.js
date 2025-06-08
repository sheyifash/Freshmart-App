const express = require("express")
const {register} = require("../controllers/register")
const {validateRegistration} = require("../middlewares/registration")
const {validatelogIn} = require("../middlewares/logInValidation")
const {logIn} = require("../controllers/logIn")
const router = express.Router()

router.post("/register", validateRegistration, register)

router.post("/logIn", validatelogIn, logIn)

module.exports = router