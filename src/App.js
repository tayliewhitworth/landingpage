import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'

function App() {
  return (
    <>
      {/* The Navbar component stays out of the Routes because it is on every page */}
      <Navbar />
      <Routes>
        {/* This is where you will put all the componenets to navigate to */}
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
