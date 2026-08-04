import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-retail-ai-3-82jz.onrender.com",
});
export const predictProduct = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await API.post(
    "/vision/classify-product",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};