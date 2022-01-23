import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Components/navbar";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./Components/homepage";
import Footer from "./Components/footer";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
