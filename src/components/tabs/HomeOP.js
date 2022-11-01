import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar'; 
import HeroSection from '../HeroSection/HeroOwen';
import Footer from '../Footer';
import Beef from '../pages/Beef';
import Pork from '../pages/Pork';
import Lamb from '../pages/Lamb';
import Chicken from '../pages/Chicken';

const HomeOP = () => {
    const [isOpen, setIsOpen] = useState(false)
        
    const toggle = () => {
      setIsOpen(!isOpen)
    };
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar  toggle={toggle}/>
          <HeroSection />
          <Beef/>
          <Pork/>
          <Lamb/>
          <Chicken/>
          <Footer />
        </>
      );
  };
  
  export default HomeOP;