import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
  timeoutErrorMessage: "Network trouble...",
});

export default instance;
