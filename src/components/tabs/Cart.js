import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Cartbody from '../HeroSection/HeroCart'

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
        
    const toggle = () => {
      setIsOpen(!isOpen)
    };
      return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar  toggle={toggle}/>
          <Cartbody/>
          <Footer />
        </>
      );
  };
  
  export default Cart;