import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Projects from "./components/Projects";
import Resume from "./components/Resume";

import Footer from "./components/Footer";

function App() {
  // let selectedPage = "About";
  const [selectedPage, setSelectedPage] = useState("About");

  const changePage = (page) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <h1>Page not found!</h1>;
    }
  };

  return (
    <>
      <Navbar changePage={changePage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
