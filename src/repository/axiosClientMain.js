
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL_RESOURCE,
  });

  axiosClient.interceptors.request.use(function (config) {
    let token = localStorage.getItem('my-token')
    if(token){
      config.headers["auth-token"] = `${token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosClient