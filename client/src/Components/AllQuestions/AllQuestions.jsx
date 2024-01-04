import React, { useEffect, useState } from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUserAlt } from "react-icons/fa";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { MdNavigateNext } from "react-icons/md";
import axios from '../../CommonResources/axios'
import { Link } from 'react-router-dom';
function AllQuestions() {
    const [questions, setQuestions] = useState([]);
    const token = localStorage.getItem("token");
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
				<Link to={`/question/${question.questionid}`} key={i}>
					<div className="group each__question  border-t border-gray-300 py-2 hover:bg-slate-200   ">
						<div className="flex justify-between pl-4 pt-4">
							<div className="flex justify-between">
								<div className="hover:text-black w-8 h-8 mr-10">
									<FaUserAlt className="text-6xl border border-black rounded-full p-2 group-hover:bg-black group-hover:text-white " />
								</div>
								<div className="ml-10 py-6 font-mono">{question.title}</div>
							</div>
							<div>
								<MdNavigateNext className="text-5xl text-bold mr-5 transition-all duration-500 group-hover:mr-1" />
							</div>
						</div>
						<p className="pl-4 ml-2 ">{question?.username}</p>
					</div>
				</Link>
			))}
		</>
	);
}

export default AllQuestions