import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import Router from "./components/utils/router/router";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Router>
      <Header />
      <Router />
    </Router>
    <Footer />
  </>
  // </React.StrictMode>
);
