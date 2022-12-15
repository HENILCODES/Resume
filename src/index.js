import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {} from "react-router-dom";
import Router from "./Router";
import { MessageContexProvider } from "./components/templates/MessageContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MessageContexProvider>
      <Router />
    </MessageContexProvider>
  </React.StrictMode>
);

reportWebVitals();
