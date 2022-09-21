import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  const [currentPage, switchPage] = useState("about");
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      // case "portfolio":
      //   return <Portfolio />;
      // case "projects":
      //   return <Projects />;
      // case "resume":
      //   return <Resume />;
        default:
          return <Home/>;
    }
  };
  return (
    <>
      <Navbar />
      {renderPage(currentPage)}
      {/* {
        currentPage === 'home' ? 
        <div>{renderPage(currentPage)}</div>
        :<div>{renderPage(currentPage)}</div>
      } */}
      <Footer />
    </>
  );
}

export default App;
