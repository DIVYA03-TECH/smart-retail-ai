import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-retail-ai-3-82jz.onrender.com",
  timeout: 30000,
});
export const analyzeSentiment = async (text) => {
  const response = await API.post("/nlp/sentiment", {
    text,
  });

  return response.data;
};