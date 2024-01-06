import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
function Landing() {
	// sliding effect
	const [activeComponent, setActiveComponent] = useState("login");

	const toggleComponent = (component) => {
		setActiveComponent(component);
	};

	return (
		<div className="home bg-cover bg-no-repeat bg-[url('https://www.evangadi.com/themes/humans/assets/images/misc/bg-svg-f.svg')] bg-gray-200 h-full pb-5  mt-[40px]  ">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-between w-85 h-full mx-40 pt-40 ">
					<div
						className={`w-full lg:w-1/2  overflow-hidden relative  bg-white shadow-lg p-3 rounded-lg h-550`}
					>
						<div
							className={` transition-transform duration-700 transform ${
								activeComponent == "login"
									? "translate-x-0"
									: "translate-x-full"
							}`}
						>
							{activeComponent === "login" && (
								<Login toggleComponent={toggleComponent} />
							)}
						</div>
						<div
							className={`     transition-transform duration-700 transform ${
								activeComponent == "signup"
									? "translate-x-0"
									: "translate-x-full"
							}`}
						>
							{activeComponent === "signup" && (
								<Register toggleComponent={toggleComponent} />
							)}
						</div>
					</div>
					<div className="w-full lg:w-1/2 mt-1 sm:mt-7">
						<div className="md:mx-2 lg:px-5">
							<h3 className="text-orange-400 text-2xl">About</h3>
							<h1 className="text-3xl my-3">
								Evangadi <br />
								Networks
							</h1>
							<div className="text-justify">
								<p>
									No matter what stage of life you are in, whether you’re just
									starting elementary school or being promoted to CEO of a
									Fortune 500 company, you have much to offer to those who are
									trying to follow in your footsteps.
								</p>
								<p className="my-3">
									Wheather you are willing to share your knowledge or you are
									just looking to meet mentors of your own, please start by
									joining the network here.
								</p>
							</div>
							<button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
								HOW IT WORKS
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
