import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 30000,
});

export const analyzeSentiment = async (text) => {
  const response = await API.post("/nlp/sentiment", {
    text,
  });

  return response.data;
};