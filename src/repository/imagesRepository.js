
import axiosClientMain from './axiosClientMain'

const resource = "/api/images";
export default {
  getAllImages() {
    return axiosClientMain.get(`${resource}`);
  },
  createImage(payload) {
    return axiosClientMain.post(`${resource}` , payload);
  },

};
