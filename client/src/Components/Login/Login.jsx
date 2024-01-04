import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../CommonResources/axios";
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
function Login({ toggleComponent }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	// input field validation
	const emailDom = useRef();
	const passwordDom = useRef();
	const inputAlert = (dom) => {
		dom.current.style.backgroundColor = "#fee6e6";
		dom.current.focus();
	};
	// getting the values of email and password

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	// Login functionality
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		emailDom.current.style.backgroundColor = "#fff";
		passwordDom.current.style.backgroundColor = "#fff";

		if (!email) {
			inputAlert(emailDom);
			return;
		}

		if (!password) {
			inputAlert(passwordDom);
			return;
		}
		// login in
		try {
			const { data } = await axios({
				method: "POST",
				url: "/users/login",
				data: {
					email: email,
					password: password,
				},
				headers: {
					"Content-Type": "application/json",
				},
			});
			// setting token and username on local storagge
			localStorage.setItem("token", data.token);
			localStorage.setItem("username", data.username);
			navigate("/home");
		} catch (error) {
			setError(error.response.data);
			console.log(error.response.data);
		}
	};

	// show/hide passowrd functionaity
	const showHidePassowrd = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};
	return (
		<div className="bg-white p-3">
			<h3 className="text-center text-2xl p-6">Login to your account</h3>
			<div className="flex flex-wrap mb-4">
				<p className="text-center w-full lg:w-1/2">don't have an account ?</p>
				<p className="text-center text-orange-500 w-full lg:w-1/2 hover:underline">
					<Link to="#" onClick={() => toggleComponent("signup")}>
						Create a new account
					</Link>
				</p>
			</div>
			{error && <div className="text-red-400">{error.msg}</div>}
			<form onSubmit={handleLoginSubmit}>
				<div>
					<input
						ref={emailDom}
						onChange={handleEmailChange}
						className={`w-full border p-2 border-gray-300 rounded-md `}
						type="email"
						placeholder="email"
					/>
				</div>
				<br />
				<div className="relative">
					<input
						ref={passwordDom}
						onChange={handlePasswordChange}
						className={`w-full border p-2 border-gray-300 rounded-md `}
						type={showPassword ? "text" : "password"}
						placeholder="password"
					/>
					<span
						className="absolute right-1 top-1/4 transform -translate-x-1/2 hover:text-orange-400 opacity-50"
						onClick={showHidePassowrd}
					>
						{showPassword ? <FiEye /> : <LuEyeOff />}
					</span>
				</div>
				<div className="text-end mt-10  hover:underline">
					<a className="text-orange-500 ">Forgot password?</a>
				</div>
				<div className="flex justify-center mt-10">
					<button
						className="px-14 py-2 my-4 mb-10 text-center text-white text-2xl bg-blue-500 rounded-md hover:bg-orange-400 w-full"
						type="submit"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
