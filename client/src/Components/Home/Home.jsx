import React from 'react'
import AllQuestions from '../AllQuestions/AllQuestions';
import { Link } from 'react-router-dom';
import { useAppStateValue } from '../../App';

function Home() {
	const [user, setUser] = useAppStateValue();
	return (
		<div className="bg-slate-100 container mx-auto">
			<div className="">
				<div className="container py-5 ">
					<div className="ask__question flex justify-between mr-4">
						<div>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
								Ask Question
							</button>
						</div>
						<h3 className="text-2xl pr-5">
							Welcome:
							<span className="username text-red-400"> {user?.username}</span>
						</h3>
					</div>
					<div className="search__question pt-5 pb-3 pr-5 mr-4">
						<input
							type="text"
							placeholder="search question"
							className="w-full border border-gray-300 rounded-md p-3 "
						/>
					</div>
					<AllQuestions />
				</div>
			</div>
		</div>
	);
}

export default Home