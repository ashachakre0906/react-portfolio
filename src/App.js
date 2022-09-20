import react from "react";
import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
    <Router>
    <Routes>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      {/* <Route path='/portfolio'element = {<Portfolio/>}></Route>
      <Route path='/contact'element = {<Contact/>}></Route>
      <Route path='/resume' element = {<Resume/>}></Route> */}
    </Routes>
    </Router>
    {/* <Footer /> */}
    </div>
  )
  
}

export default App;
