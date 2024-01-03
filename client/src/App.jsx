
import './App.css'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Header from './Components/Header/Header'
function App() {


  return (
		<>
			{/* <Login /> */}

			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header/>
							<Landing />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home"
					element={
						<>
					
							<Home />
							<Footer />
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
