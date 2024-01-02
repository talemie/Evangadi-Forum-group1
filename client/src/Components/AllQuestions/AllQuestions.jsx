import React, { useEffect, useState } from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from '../../CommonResources/axios'
function AllQuestions() {
    const [questions, setQuestions] = useState([]);
    const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYiIsInVzZXJpZCI6MiwiaWF0IjoxNzA0MjA3NDE2LCJleHAiOjE3MDQyOTM4MTZ9.exLuPw23X7Z78DiiS4u2_M804Nn7GxItpsqtrdccrAA";
    useEffect(() => {
			const fetchQuestions = async () => {
				try {
					const response = await axios({
						method: "GET",
						url: `/questions/all-questions`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					// console.log(response.data);
					setQuestions(response.data.response);
				} catch (error) {
					console.log(error);
				}
			};
			fetchQuestions();
    }, []);
    // console.log('Fetched questions ',questions);
  return (
		<>
			{questions?.map((question, i) => (
				<div key={i}>
					<div className="each__question  border-t border-gray-300 py-4 hover:bg-slate-200">
						<div className="flex justify-between pl-4">
							<div className="flex justify-between">
								<div className="hover:text-black w-8 h-8 mr-10">
									<AccountCircleIcon className=" " />
								</div>
								<div className="ml-10">{question.title}</div>
							</div>
							<div>
								<KeyboardArrowRightIcon className="" />
							</div>
						</div>
						<p className="pl-4">{question?.username}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default AllQuestions