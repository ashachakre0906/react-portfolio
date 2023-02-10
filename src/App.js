import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import config from "./data/particles.json";
import Particles from 'react-tsparticles';
import {loadSnowPreset} from "tsparticles-preset-snow";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
// import { loadStarsPreset } from "tsparticles-preset-stars";

class ParticlesContainer extends React.PureComponent {
  async customInit(engine){
    await loadSnowPreset(engine);
  }
  render() {
    const options = {
      preset: "snow"
    };
    return <Particles options={options}init={this.customInit}style={{opacity: "0.2"}}/>
  }
}
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
    {/* <div id="body" style={styles.background}>
      <Particles
        id="tsparticles"
        options={config}
      />
    </div> */}
      <Navbar changePage={changePage} />
      <ParticlesContainer/>
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
