import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-retail-ai-3-82jz.onrender.com",
  timeout: 60000,
});

export const sendMessage = async (message) => {
  const response = await API.post("/chatbot/chat", {
    message,
  });

  return response.data;
};