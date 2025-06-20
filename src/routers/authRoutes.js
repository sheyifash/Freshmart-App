const express = require("express")
const register = require("../controllers/register")
const validateRegistration = require("../middlewares/registration")
const validatelogIn = require("../middlewares/logInValidation")
const {logIn} = require("../controllers/logIn")
const forgotPassword = require("../controllers/forgotPassword")
const resetPassword = require("../controllers/resetPassword")
const router = express.Router()

router.post("/register", validateRegistration, register)

router.post("/logIn", validatelogIn, logIn)

router.post("/forgot-password", forgotPassword)

router.patch("/reset-password", resetPassword)

module.exports = router