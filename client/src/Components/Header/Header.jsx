//Header component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MiniSideMenu from "./MiniSideMenu";
function Header() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const token = localStorage.getItem("token");
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	// console.log(windowWidth);
	const logingOut = () => {
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<div className="bg-white w-full px-20 fixed top-0 left-0  shadow z-10">
			<div className="  flex justify-between   py-7 ">
				<Link to="/home">
					<img
						className="max-w-none"
						src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
						alt="Evangadi Logo"
					/>
				</Link>
				{windowWidth > 990 ? (
					<div className=" flex space-x-6 mr-20">
						<Link className=" hover:text-orange-500 py-2" to="/Home">
							Home
						</Link>
						<Link className=" hover:text-orange-500 py-2" to="/explained">
							How it Works{" "}
						</Link>
						<Link
							className={`py-2 ' ${token?' hover:text-orange-500':'hover:bg-orange-500 text-white  px-20   rounded-md border border-gray-600 bg-blue-600'} `}
							to="/sign in"
							onClick={logingOut}
						>
							{!token ? "SIGN IN" : "LOG OUT"}
						</Link>
					</div>
				) : (
					<div>
						<MiniSideMenu />
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
