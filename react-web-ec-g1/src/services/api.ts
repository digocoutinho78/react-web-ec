import axios from "axios";

export const api = axios.create({
  baseURL: "https://e-commerce-react-web-108e3-default-rtdb.firebaseio.com",
});
