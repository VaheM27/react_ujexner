import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const Axios = {
  getProducts() {
    return instance.get("/products");
  },
  getOneProduct(id) {
    return instance.get(`/products/${id}`);
  },
  editPrice({ id, price }) {
    return instance.put(`/products/${id}`, { price });
  },
  deleteElement(id) {
    return instance.delete(`/products/${id}`);
  },
};
