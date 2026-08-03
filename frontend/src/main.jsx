import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-right"
        gutter={12}
        reverseOrder={false}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#0F172A",
            color: "#FFFFFF",
            borderRadius: "12px",
            padding: "12px 16px",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          },
          success: {
            iconTheme: {
              primary: "#2563EB",
              secondary: "#FFFFFF",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
          },
          loading: {
            iconTheme: {
              primary: "#F59E0B",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);