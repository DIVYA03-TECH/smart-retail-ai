import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const clearDashboard = async () => {
  const response = await API.delete("/dashboard/clear");
  return response.data;
};