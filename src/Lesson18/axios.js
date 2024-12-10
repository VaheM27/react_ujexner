import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 2000,
  timeoutErrorMessage: "Your internet is so slow",
});

export default instance;
