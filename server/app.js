const express = require("express");
const app = express();
const cors=require('cors')
const port = 7700;
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
// db connection
const dbconnection = require("./db/dbConfig");

// use routes middleware file
const useRoutes = require("./routes/userRoute");

// questions routes middleware file
const questionsRoutes = require("./routes/questionRoute");
// authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

// answer route middlewaree 
const answerRoutes = require("./routes/answerRoute")

// Apply rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // maximum of 100 requests per windowMs
});
app.use(limiter);

// Apply helmet middleware
app.use(helmet());

// using cors middleware
app.use(cors())

// json middleware to extract json data
app.use(express.json());

// use routes middleware

app.use("/api/users", useRoutes);

// questions routes middleware??

app.use("/api/questions",authMiddleware, questionsRoutes);

// answers routes middleware??

app.use("/api/answer",authMiddleware, answerRoutes);

async function start() {
	try {
		const result = await dbconnection.execute("select 'test'");

		await app.listen(port);
		console.log("database connection established");
		console.log(`listing on ${port}`);
	} catch (error) {
		console.log(error.message);
	}
}
start();

// app.listen(port, (err) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(`listen on ${port}`);
// 	}
// });
