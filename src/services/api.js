import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-backend-ho3t.onrender.com",
  withCredentials: true
});