import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import MyRouterProvider from './components/MyRouterProvider';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyRouterProvider />
  </React.StrictMode>,
);
