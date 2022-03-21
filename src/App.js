// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './themify-icons.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Uconstruction from './pages/Uconstruction';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/uconstruction' element={<Uconstruction />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
