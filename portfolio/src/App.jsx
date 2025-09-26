import React from 'react';
import { useState } from 'react';
import { Link } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';




export default function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes >
        <Footer />
      </div>
    </>
  );
}






