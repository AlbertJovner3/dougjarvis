import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import '../App.css';
import { FaBars } from 'react-icons/fa';
import {Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background:${({scrollNav}) => (scrollNav ? 'var(--clr-accent)' : '#1112')};
    font-family: var(--ff-primary);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 800;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;
 
export const NavLogo = styled(LinkRouter)`
    font-weight: var(--fw-titles);
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
    &:hover {
        transform: rotate(5deg);
        color: #790404;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`;

export const MobileIcon = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        color: #fff;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        
        &:hover {
            transition: all 0.2s ease-in-out;
            color: var(--clr-accent);
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    color: #fff;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    border-radius: 10px;
    white-space: nowrap;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #f73859;
    }
`;

export const NavLink1 = styled(LinkRouter)`
    color: #fff;
    font-family:var(--ff-style);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    &:hover {
        transition: all 0.2s ease-in-out;
        text-shadow: 0px 0 black, 0 0px black, 0px 0 black, 0 0px black;
        color: #000;
    }
    &.active {
        border-bottom: 3px solid #000;
    }
`;

export const NavLink2 = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #000;
    }
    &.active {
        border-bottom: 3px solid #000;
    }
`;


export const NavBtn = styled.nav`
border-radius: 10px;
white-space: nowrap;
padding: 5px;
font-size: 18px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #f73859;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavBtnLink = styled(LinkRouter)`
color: #fff;
font-family:var(--ff-style);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
}
&.active {
    border-bottom: 3px solid #000;
}

`;
