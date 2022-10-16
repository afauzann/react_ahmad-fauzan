import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import TodoPage from "../pages/TodoPage";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage/>} />
                <Route path="*" element={<NotFoundPage/> } />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;