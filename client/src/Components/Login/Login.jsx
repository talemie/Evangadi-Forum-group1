import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../CommonResources/axios";
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
function Login({ toggleComponent }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate=useNavigate()

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
		if (!email || !password) {
			setError(true);
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
			console.log(data);
			localStorage.setItem("token", data.token);
			navigate('/home')
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
						onChange={handleEmailChange}
						className={`w-full border p-2 border-gray-300 rounded-md ${
							error && !email ? "bg-red-200" : ""
						}`}
						type="email"
						placeholder="email"
					/>
				</div>
				<br />
				<div className="relative">
					<input
						onChange={handlePasswordChange}
						className={`w-full border p-2 border-gray-300 rounded-md ${
							error && !password ? "bg-red-200" : ""
						}`}
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
