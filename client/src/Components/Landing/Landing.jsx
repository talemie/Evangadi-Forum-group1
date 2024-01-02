import React, { useState } from "react";
function Landing() {
	// sliding effect
	// const [activeComponent, setActiveComponent] = useState("login");

	// const toggleComponent = (component) => {
	// 	setActiveComponent(component);
	// };

	return (
		<div className="home pb-5">
			<div className="container">
				<div className="flex home__internal">
					<div><h2>Login/Sign up </h2></div>
					<div className="col-md-6 mt-1 sm:mt-7">
						<div className="md:mx-2">
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
