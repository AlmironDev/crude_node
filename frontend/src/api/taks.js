import axios from "./axios";

export const taksRequest = () => axios.get(`/taks`);
export const getTaksRequest = (id) => axios.get(`/taks/${id}`);
export const postTaksRequest = (taks) => axios.post(`/taks`, taks);
export const putTaksRequest = (taks) => axios.put(`/taks/${taks._id}`, taks);
export const deleteTaksRequest = (id) => axios.delete(`/taks/${id}`);
