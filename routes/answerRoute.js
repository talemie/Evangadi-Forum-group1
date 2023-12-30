const express = require('express')
const router =express.Router()
const {postanswer} = require("../controller/answerController")



router.post("/answer",postanswer)




module.exports = router