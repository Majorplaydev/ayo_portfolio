import React from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div classname='App'>
      <Navbar />
      <h1> Hello </h1>
      <Footer />
      <Router>
       <Routes>
            <Route exact path="/navbar" element={<Navbar />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
