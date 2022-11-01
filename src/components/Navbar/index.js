import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarBox, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLink1,
    NavBtn,
    NavBtnLink
 } from './NavbarElements';
   
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrolNav] = useState(false)

    const changeNav =  () => {
        if(window.scrollY >=80) {
            setScrolNav(true)
        }else {
            setScrolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarBox>
                <NavLogo to='/'>DJ Butchers</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink1 to='/homeop'>Owens Place</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to='/homepp'>Papamoa Plaza</NavLink1>
                    </NavItem>
                
                <NavBtn>
                    <NavBtnLink to='/cart'>Cart</NavBtnLink>
                </NavBtn> 
                </NavMenu>               
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
