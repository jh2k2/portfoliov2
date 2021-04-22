import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					<Route path="/Contact" exact>
						<Contact></Contact>
					</Route>
					<Route path="/Project" exact>
						<Project></Project>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
