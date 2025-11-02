// 1. Нет необходимости импортировать React, если ты используешь Vite и JSX,
import React from "react";
import ReactDom from "react-dom/client";
import { Layout } from "./Layout";
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
