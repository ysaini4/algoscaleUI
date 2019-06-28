import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "http://localhost:3000";
const addHeaderToken = () => {
  if (axios.defaults.headers.common["x-auth-token"]) return;
  let token = localStorage.getItem("x-auth-token");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  }
};
export const httpService = async (method, url, data = "", secure = true) => {
  try {
    if (secure) {
      addHeaderToken();
    }
    const res = await axios({
      method,
      url,
      data
    });
    if (res.data.msg) {
      toast.success(res.data.msg);
    }
    return res.data;
  } catch (err) {
    toast.error("error");
    throw err;
  }
};
export const httpServiceLogin = async (method, url, data = "") => {
  try {
    const res = await axios({
      method,
      url,
      data
    });
    if (res.data.msg) {
      toast.success(res.data.msg);
    }
    if (res.headers["x-auth-token"]) {
      axios.defaults.headers.common["x-auth-token"] =
        res.headers["x-auth-token"];

      localStorage.setItem("x-auth-token", res.headers["x-auth-token"]);
    }
    return res.data;
  } catch (err) {
    if (err.response.data.msg) {
      toast.error(err.response.data.msg);
    }
    throw err.response.data;
  }
};
