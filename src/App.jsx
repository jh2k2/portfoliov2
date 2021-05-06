import "./App.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Career from "./components/Career/Career";
import Proficiency from "./components/Proficiency/Proficiency";

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
					<Route path="/Career" exact>
						<Career></Career>
					</Route>
					<Route path="/Proficiency" exact>
						<Proficiency></Proficiency>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
