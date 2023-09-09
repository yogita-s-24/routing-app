import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './components/Navbar/Navbar'
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar/>
  </>
);
