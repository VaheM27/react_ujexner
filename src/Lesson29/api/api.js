import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const Axios = {
  getUsers() {
    return instance.get("/users");
  },
};
