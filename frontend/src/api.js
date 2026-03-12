import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-znls.onrender.com"
});

export default API;