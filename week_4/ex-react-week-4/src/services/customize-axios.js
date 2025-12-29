import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_REQRES_URL,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});


export default instance;
