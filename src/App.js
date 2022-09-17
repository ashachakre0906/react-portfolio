import react from "react";
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
          <Router>
    <Routes>
      <Route path='/' element = {<Navbar/>}></Route>
    </Routes>
    </Router>
    </div>
  
  )
  
}

export default App;
