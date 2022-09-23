import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutAppPage from "../pages/AboutAppPages";
import AboutAuthorPage from "../pages/AboutAuthorPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage/>} />
				<Route path="/about">
					<Route index element={<AboutPage/>} />
					<Route path="/about" element={<AboutPage/>} />
                    <Route path="/about/about-app" element={<AboutAppPage/>} />
                    <Route path="/about/about-author" element={<AboutAuthorPage/>} />
				</Route>
                <Route path="/about" element={<AboutPage/>} />
                <Route path="*" element={<NotFoundPage/> } />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;