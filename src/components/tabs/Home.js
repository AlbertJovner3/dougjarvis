import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar'; 
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Offer from '../pages/Staff'
import About from '../pages/About'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false)
        
    const toggle = () => {
      setIsOpen(!isOpen)
    };
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar  toggle={toggle}/>
          <HeroSection />
          <About />
          <Offer/>
          <Footer />
        </>
      );
  };
  
  export default Main;