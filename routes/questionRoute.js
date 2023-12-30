const express = require("express");
const router = express.Router();
const {
	askQuestion,
	getQuestion,
} = require("../controller/questionController");
router.get("/all-questions", getQuestion);

router.post("/ask-question", askQuestion);
module.exports = router;
