
import axiosClient from './axiosClient'

const resource = "/api/user/login";
export default {
  login(payload) {
    return axiosClient.post(`${resource}` , payload);
  },


};
