import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-retail-ai-3-82jz.onrender.com",
});

// -------------------------
// Register Face
// -------------------------
export const registerFace = async (name, images) => {

  const formData = new FormData();

  formData.append("name", name);

  images.forEach((image, index) => {

    formData.append(
      "files",
      image,
      `face-${index + 1}.jpg`
    );

  });

  const response = await API.post(
    "/vision/register-face",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// -------------------------
// Recognize Face
// -------------------------
export const recognizeFace = async (image) => {

  const formData = new FormData();

  formData.append("file", image);

  const response = await API.post(
    "/vision/recognize-face",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};