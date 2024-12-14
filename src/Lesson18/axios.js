import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 2000,
  timeoutErrorMessage: "Your internet is so slow",
  headers: {
    Accept: "application/json",
    Authorization: ` Bearer`,
  },
});

export default instance;
