import axiosInstance from "../axiosInstance";

const UserApis = {
  async getUser() {
    try {
      const response = await axiosInstance.get(`/user`);
      return response.data;
    } catch (err) {
      const { message } = err.response;
      throw new Error(message);
    }
  },
};
export default UserApis;
