import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Shit</h1>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		);
	}
}

export default App;
