import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Header from "./Components/Header/Header";
import SingleQuestion from "./Components/SingleQuestion/SingleQuestion";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "./CommonResources/axios";
import AskQuestion from "./Components/AskQuestion/AskQuestion";
// create context 
const AppStateContext = createContext();
function App() {
		const [user, setUser] = useState();
		const token = localStorage.getItem("token");
	const navigate = useNavigate();

	// checking the user on every page to protect the route functionality
		const checkUser = async () => {
			try {
				const { data } = await axios.get("/users/check", {
					headers: {
						Authorization: "Bearer " + token,
					},
				});
				setUser(data);
			} catch (error) {
				console.log(error);
				navigate("/");
			}
		};
		useEffect(() => {
			checkUser();
		}, []);
	
	return (
		<AppStateContext.Provider value={[user, setUser]}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Landing />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home"
					element={
						<>
							<Header />
							<Home />
							<Footer />
						</>
					}
				/>
				{/* single question route */}
				<Route
					path="/question/:questionid"
					element={
						<>
							<Header />
							<SingleQuestion />
							<Footer />
						</>
					}
				/>
        <Route 
        path="/ask-question" 
        element={
        <> 
        <Header /> 
        <AskQuestion/>  
        <Footer/> 
        </> }
        />
			</Routes>
		</AppStateContext.Provider>
	);
}
export const useAppStateValue = () => useContext(AppStateContext);
export default App;
