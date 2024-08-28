import axios from "./axios";

export const taksRequest = () => axios.get(`/taks`);
export const getTaksRequest = (id) => axios.get(`/taks/${id}`);
export const postTaksRequest = (taks) => axios.post(`/taks`, taks);
export const putTaksRequest = (id, taks) => axios.put(`/taks/${id}`, taks);
export const deleteTaksRequest = (id) => axios.delete(`/taks/${id}`);
