import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 60000,
});

export const sendMessage = async (message) => {
  const response = await API.post("/chatbot/chat", {
    message,
  });

  return response.data;
};