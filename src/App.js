import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes>
					<Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
				</Routes>
			</div>
		);
	}
}

export default App;
