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
	console.log(windowWidth);
	const logingOut = () => {
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<div className="bg-white container mx-auto">
			<div className="  flex space-x-[604px]   ">
				<Link to="/home">
					<img
						className=""
						src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
						alt="Evangadi Logo"
					/>
				</Link>
				{windowWidth > 990 ? (
					<div className="container  flex space-x-6 pt-6">
						<Link className=" hover:text-orange-500" to="/Home">
							Home
						</Link>
						<Link className=" hover:text-orange-500" to="/explained">
							How it Works{" "}
						</Link>
						<Link
							className=" hover:text-orange-500"
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
