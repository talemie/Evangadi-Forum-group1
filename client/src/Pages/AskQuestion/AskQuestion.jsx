import React, { useRef, useState } from "react";
import axios from "../../CommonResources/axios";

import { IoArrowForwardCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function AskQuestion() {
    const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const QuestionTitleDom = useRef();
	const QuestionDetailDom = useRef();

	// success message
	const [isPostSuccessful, setIsPostSuccessful] = useState(false);

	// input field validation
	const inputAlert = (dom) => {
		dom.current.style.backgroundColor = "#fee6e6";
		dom.current.focus();
	};

	async function handleSubmit(e) {
		e.preventDefault();

		QuestionTitleDom.current.style.backgroundColor = "#fff";
		QuestionDetailDom.current.style.backgroundColor = "#fff";

		const QuestionTitleValue = QuestionTitleDom.current.value;
		const QuestionDetailValue = QuestionDetailDom.current.value;

		if (!QuestionTitleValue) {
			inputAlert(QuestionTitleDom);
			return;
		}
		if (!QuestionDetailValue) {
			inputAlert(QuestionDetailDom);
			return;
		}
		
		try {
			const { data } = await axios({
				method: "POST",
				url: "/questions/ask-question",
				data: {
					title: QuestionTitleValue,
					description: QuestionDetailValue,
				},
                headers:{
                    Authorization:`Bearer ${token}`
                }
			});

			// localStorage.setItem("token", data.token);
			//  alert('post succesfully')
			setIsPostSuccessful(true);
			console.log(data);
            setTimeout(() => {
                navigate("/home");
            }, 3000);
			
		} catch (error) {
			console.log(error.response);
		}
	}
	return (
		<>
			<div className=" bg-slate-100  mt-[70px] pt-[50px] px-20">
				<div className="container mx-auto px-6 ">
					<div className="group">
						<h3 className=" text-2xl text-left font-mono pt-10 pb-4 font-bold  relative   ">
							Steps To Write A Good Question.
							<span className="absolute bottom-0 left-0 w-1/3 h-1 bg-orange-500 transition-all duration-500 group-hover:w-1/2"></span>
						</h3>
						<div className="pl-30 ml-5">
							<p className="flex items-center w-full py-2 font-mono text-center">
								<IoArrowForwardCircle className="mr-2" />
								Summerize your problems in a one-line title.
							</p>

							<p className="flex items-center w-full py-2 font-mono text-left">
								<IoArrowForwardCircle className="mr-2" />
								Describe your problem in more detail.
							</p>

							<p className="flex items-center w-full py-2 font-mono text-left">
								<IoArrowForwardCircle className="mr-2" />
								Describe what you tried and what you expected to happen.
							</p>

							<p className="flex items-center w-full py-2 font-mono text-left">
								<IoArrowForwardCircle className="mr-2" />
								Review your question and post it here.
							</p>
						</div>
					</div>

					<div>
						<h2 className="font-sans text-3xl text-center  pt-8 pb-4">
							Post Your Question
						</h2>
						<form onSubmit={handleSubmit}>
							{isPostSuccessful && (
								<p className="text-green-600  mt-2 text-center p-2 ">
									Post request successful!
								</p>
							)}
							<div>
								<input
									ref={QuestionTitleDom}
									className="w-full  py-4 pl-6 rounded-md border border-gray-600 "
									type="text"
									placeholder="Question title"
								/>
							</div>

							<div>
								<textarea
									ref={QuestionDetailDom}
									className="w-full  my-2 pl-6 pt-6 rounded-md border border-gray-600 "
									placeholder="Question detail .... "
									name=""
									id=""
									cols="30"
									rows="6"
								></textarea>
							</div>

							<button className=" text-white  px-2 py-2 mb-6 rounded-md border border-gray-600 bg-blue-600">
								{" "}
								Post Question
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default AskQuestion;
