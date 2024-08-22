import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App.js";
import "./index.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
