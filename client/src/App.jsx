
import './App.css'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";

function App() {


  return (
		<>
			<Login />
			<Footer />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
