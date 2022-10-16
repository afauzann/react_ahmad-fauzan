import axiosInstance from "../config/axiosInstance";

const APITodo = {
    async getAllProduct() {
		try {
			const response = await axiosInstance.get("/todo");
			return response;
		} catch (err) {
			const { message } = err.response;
			throw new Error(message);
		}
	},
	async createTodo() {
		try {
			const response = await axiosInstance.post("/todo");
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async updateTodo({id}) {
		try {
			const response = await axiosInstance.put(`/todo/${id}`);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async deleteTodo({id}) {
		try {
			const response = await axiosInstance.delete(`/todo/${id}`);
			return response;
		} catch (err) {
			const { message } = err.response;
			throw new Error(message);
		}
	},
}

export default APITodo