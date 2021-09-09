import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://vnt-employee-back.herokuapp.com/",
});

export default api;
