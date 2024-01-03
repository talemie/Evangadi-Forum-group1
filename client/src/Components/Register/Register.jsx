import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import axios from "../../CommonResources/axios";

function Register({ toggleComponent }) {
	// show/hide passowrd functionaity
	const [showPassword, setShowPassword] = useState(false);
	const [isInputFocused, setInputFocused] = useState(false);
	const [error, setError] = useState("");

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// InputFocus/blur functionality
	const handleInputFocus = () => {
		setInputFocused(true);
	};

	const handleInputBlur = () => {
		setInputFocused(false);
	};

	//  Register functionality
	const navigate = useNavigate();
	const userNameDom = useRef();
	const firstnameDom = useRef();
	const lastnameDom = useRef();
	const emailDom = useRef();
	const passwordDom = useRef();

	// input field validation
	const inputAlert = (dom) => {
		dom.current.style.backgroundColor = "#fee6e6";
		dom.current.focus();
	};
	async function handleSubmit(e) {
		e.preventDefault();

		userNameDom.current.style.backgroundColor = "#fff";
		firstnameDom.current.style.backgroundColor = "#fff";
		lastnameDom.current.style.backgroundColor = "#fff";
		emailDom.current.style.backgroundColor = "#fff";
		passwordDom.current.style.backgroundColor = "#fff";

		const usernameValue = userNameDom.current.value;
		const firstnameValue = firstnameDom.current.value;
		const lastnameValue = lastnameDom.current.value;
		const emailValue = emailDom.current.value;
		const passwordvalue = passwordDom.current.value;

		if (!usernameValue) {
			inputAlert(userNameDom);
			return;
		}
		if (!firstnameValue) {
			inputAlert(firstnameDom);
			return;
		}

		if (!lastnameValue) {
			inputAlert(lastnameDom);
			return;
		}
		if (!emailValue) {
			inputAlert(emailDom);
			return;
		}

		if (!passwordvalue) {
			inputAlert(passwordDom);
			return;
		}

		try {
			await axios.post("/users/register", {
				username: usernameValue,
				firstname: firstnameValue,
				lastname: lastnameValue,
				email: emailValue,
				password: passwordvalue,
			});

			alert("register successfull please login");
			toggleComponent("login");
			// navigate("/login");
		} catch (error) {
			console.log(error.response.data);
			setError(error.response.data)
		}
	}

	return (
		<div className="bg-white rounded-md pb-8 ">
			<div className="container px-6">
				<h3 className=" w-full text-xl text-center pt-6 font-bold ">
					Join the network
				</h3>
				<div className=" w-full flex justify-center pt-2 pb-10">
					<p className="mr-2">Already have an account?</p>
					<p className="text-orange-400 hover:underline">
						<Link to="#" onClick={() => toggleComponent("login")}>
							Sign in
						</Link>
					</p>
				</div>
				{error&&<p className="text-red-400 text-xl text-center py-2">{error.msg}</p>}
				<form onSubmit={handleSubmit}>
					<input
						ref={userNameDom}
						className={`w-full mb-3 pl-4 py-3 text-base rounded-md   focus:border-blue-500  border ${
							isInputFocused ? "border-orange-400" : "border-gray-400"
						}`}
						type="text"
						placeholder="Username"
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
					/>

					<br />
					<div className="flex flex-col lg:flex-row">
						<input
							ref={firstnameDom}
							className="w-full lg:w-1/2   lg:mr-2 pl-4 py-3 text-base rounded-md border border-gray-400 "
							type="text"
							placeholder="First name"
						/>
						<br />

						<input
							ref={lastnameDom}
							className="w-full lg:w-1/2 lg:ml-2  pl-4 py-3 text-base rounded-md border border-gray-400 "
							type="text"
							placeholder="Last name"
						/>
					</div>
					<br />

					<input
						ref={emailDom}
						className="w-full mb-3 pl-4 py-3 text-base rounded-md border border-gray-400 "
						type="email"
						placeholder="Email address"
					/>
					<br />

					<div className="relative">
						<input
							ref={passwordDom}
							className="w-full mb-3 pl-4 py-3 text-base rounded-md border border-gray-400 "
							type={showPassword ? "text" : "password"}
							placeholder="password"
						/>
						<div
							className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center pr-6   cursor-pointer"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? <FiEye /> : <LuEyeOff />}
						</div>
					</div>

					<p className="text-center mb-4">
						I agree to the
						<span className="text-orange-400 hover:underline">
							<Link to="#"> privacy policy </Link>
						</span>
						and <span className="text-orange-400 hover:underline"><Link to="#">terms of service </Link></span>
					</p>

					<button className="w-full bg-blue-600  hover:bg-orange-400 mb-3 pl-4 py-2 text-base rounded-md border border-gray-400 text-white ">
						
						Agree and Join
					</button>

					<p className="w-full  text-orange-400 text-center hover:underline">
						<Link to="#" onClick={() => toggleComponent("login")}>Already have an account?</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Register;
