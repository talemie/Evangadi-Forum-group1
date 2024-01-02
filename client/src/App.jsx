
import './App.css'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Register from './Components/Register/Register';

function App() {


  return (
		<>
			{/* <Login /> */}

			<Routes>

        <Route
          path="/register"
          element={
            <>  
              <Register/>  
              <Footer/> 
            </> 
            }
          />

				<Route
					path="/"
					element={
						<>
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
