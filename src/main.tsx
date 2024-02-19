import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TextContextProvider } from "./test/TextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TextContextProvider>
      <App />
    </TextContextProvider>
  </React.StrictMode>
);
