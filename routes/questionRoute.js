const express = require("express");
const router = express.Router();
const {askQuestion} =require('../controller/questionController')
router.get("/all-questions",(req,res)=>{
    res.send("all questions")
})

router.post("/ask-question",askQuestion)
module.exports=router