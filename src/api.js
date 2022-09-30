import axios from "axios";

const apiRequest = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/"
});

export const Base = (data) => {
	return apiRequest.get(`/todos/${data}`);
};

export const Init = () => {
	return axios.get("https://jsonplaceholder.typicode.com/todos/1");
};
