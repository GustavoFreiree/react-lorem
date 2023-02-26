import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/Main";
import Home from "./components/pages/Home/Index";
import Login from "./components/pages/Login";
import Lost from "./components/pages/Lost";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout header footer />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="/" element={<MainLayout header />}>
					<Route path="*" element={<Lost />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
