import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../CommonResources/axios";
import { FaUserAlt } from "react-icons/fa";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function SingleQuestion() {
	const [[question], setQuestion] = useState([]);
	const [answer, setAnswer] = useState([]);
	const [error, setError] = useState("");
    const [yourAnswer, setYourAnswer] = useState("");
    const[success,setSucess]=useState(false)
	const answerRef = useRef(null);
	const token = localStorage.getItem("token");
	const { questionid } = useParams();
	// console.log(answer);

	// fetching answer
	const fetchAnswer = async () => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `/answer/getanswer?questionid=${questionid}`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setAnswer(data.response);
		} catch (error) {
			console.log(error.response);
		}
	};
	// fetching question
	const fetchQuestion = async () => {
		try {
			const { data } = await axios({
				method: "GET",
				url: `/questions/question?questionid=${questionid}`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			// console.log(data.questions);
			setQuestion(data.questions);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchQuestion();
		fetchAnswer();
	}, []);
	const onchangeAnswer = (e) => {
		setYourAnswer(e.target.value);
	};
	

	// submit answer handler
	const submitAnswer = async (e) => {
		e.preventDefault();
		if (!yourAnswer) {
			setError(true);
			return;
		}
		try {
			const response = await axios({
				method: "POST",
				url: `answer/answer`,
				data: {
					answer: yourAnswer,
					questionid: questionid,
				},
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
            });
            setSucess(true);
            setTimeout(() => {
                setSucess(false);
            }, 3000);
			fetchAnswer();
			// clearing the answer text area after submitting the answer
			answerRef.current.value = "";
		} catch (error) {
			setError(error.response.data);
			console.log(error.response.data);
		}
	};
	return (
		<div className=" bg-slate-100">
			<div className="container mx-auto">
				<div className=" border-b border-gray-300 pb-4">
					<h1 className="text-3xl py-4 ">QUESTION</h1>
					<div>
						<ArrowCircleRightIcon />
						<span className="text-3xl font-bold py-2 pl-2 border-b border-orange-300 ">
							{question?.title}
						</span>
						<p className="text-lg font-bold pl-5 pt-3 ml-5  ">
							{question?.description}
						</p>
					</div>
				</div>
				<div className="my-4">
					<h1 className="text-3xl  font-bold pb-3">
						Answer From The Community
					</h1>

					<div className="bg-slate-200 max-h-64 overflow-hidden overflow-y-auto">
						{answer?.map((item, i) => (
							<div key={i} className="   py-2 hover:bg-slate-200">
								<div className="flex justify-between pl-4 mx-3 border-b border-gray-400 w-2/3 ">
									<div className="hover:text-black  mr-4 ">
										<FaUserAlt className="text-6xl border border-black rounded-full p-2 hover:bg-black hover:text-white " />
										<br />
										<p className="">{item.username}</p>
									</div>
									<div className="flex-1 ml-4">{item.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<form onSubmit={submitAnswer} className="mt-10">
				{success && <p className="text-green-400 text-xl">Answer Submitted!</p>}
					<textarea
						onChange={onchangeAnswer}
						className={`w-full border border-black rounded-md p-3 my-2 ${
							!yourAnswer && error ? "bg-red-200" : ""
						}`}
						name=""
						ref={answerRef}
						id=""
						cols="100"
						rows="5"
						placeholder="  Your answer .."
					></textarea>{" "}
					<br />
					<button className="bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded my-2 mb-5">
						Post Answer
					</button>
				</form>
			</div>
		</div>
	);
}

export default SingleQuestion;
