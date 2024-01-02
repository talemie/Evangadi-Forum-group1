import axios from "axios";
const instance = axios.create({
	baseURL: "http://localhost:7700/api",
});
export default instance;
