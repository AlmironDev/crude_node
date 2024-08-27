import axios from "axios";
const APi = "http://localhost:3000/api";
export const registerRequest = (user) => axios.post(`${APi}/register`, user);
