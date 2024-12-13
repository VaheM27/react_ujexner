import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  timeoutErrorMessage: "Network error ...",
});

export default instance;
