import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // enables page navigation without reloads
import App from "./App.jsx";
import "./index.css"; // Tailwind's CSS, imported once, globally

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
