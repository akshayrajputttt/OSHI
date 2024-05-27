import React from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Marqu from './component/Marqu'
import About from './component/About'
import Eyes from './component/Eyes'
import Feature from './component/Feature'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen  text-white'>
      <Navbar />
      <Landing />
      <Marqu />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App