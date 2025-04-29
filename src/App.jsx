import './App.css'
import Navbar from './components/navbar/navbar';  
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';
import React from 'react';

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <div>Rafi</div>
    </>
  )
}

export default App
