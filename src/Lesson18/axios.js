import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeoutErrorMessage: "Your internet is so slow",
});

export default instance;
