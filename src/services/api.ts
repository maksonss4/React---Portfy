import axios from "axios";

const api = axios.create({
  baseURL: "https://api-portfy.herokuapp.com",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@portfy(token)")}`,
  },
});

export default api;
