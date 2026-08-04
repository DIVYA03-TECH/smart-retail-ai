import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-retail-ai-3-82jz.onrender.com",
});
export const clearDashboard = async () => {
  const response = await API.delete("/dashboard/clear");
  return response.data;
};