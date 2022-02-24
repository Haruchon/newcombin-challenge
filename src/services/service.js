import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
});

export class MyService {
  static postData = async (data, token) => {
    try {
      await axiosInstance.post(`/api/members`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (e) {
      throw e;
    }
  };

  static getData = async (token) => {
    try {
      const { data } = await axiosInstance.get(`/api/members`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (e) {
      throw e;
    }
  };

  static getToken = async () => {
    try {
      const { data } = await axiosInstance.post(`/auth`, {
        username: "sarah",
        password: "connor",
      });
      return data.token;
    } catch (e) {
      throw e;
    }
  };
}
