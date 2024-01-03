
import Footer from './Components/Footer/Footer'
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Register from './Components/Register/Register';
import Header from './Components/Header/Header'
import SingleQuestion from './Components/SingleQuestion/SingleQuestion';
function App() {


  return (
		<>
			{/* <Login /> */}

			<Routes>
				{/* <Route
          path="/register"
          element={
            <>  
              <Register/>  
              <Footer/> 
            </> 
            }
          /> */}

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
			</Routes>
		</>
	);
}

export default App;
