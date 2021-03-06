import axios from "axios";
import { api } from "../urlConfig";
import store from "../store";
import { LOG_OUT } from "../actions/constant";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        ...(token && { Authorization: token })
    },
});

axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = auth.token;
    }
    return req;
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
