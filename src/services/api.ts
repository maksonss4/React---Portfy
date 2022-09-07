import axios from "axios";

const api = axios.create({
  baseURL: "https://api-portfy.herokuapp.com",
  timeout: 5000,
});

export default api;
