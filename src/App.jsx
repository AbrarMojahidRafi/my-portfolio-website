import './App.css'
import Navbar from './components/navbar/navbar';  
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';
import React from 'react';
import GetInTouch from './components/getintouch';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
