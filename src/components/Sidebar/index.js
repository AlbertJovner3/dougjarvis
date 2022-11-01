import React from 'react'
import { 
    SidebarBox, 
    CloseIcon, 
    Icon, 
    SideBtnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, 
    SidebarWrapper
  } from './SidebarElements';
     
export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarBox isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/homeop' onClick={toggle}>Owens Place</SidebarLink>
                    <SidebarLink to='/homepp' onClick={toggle}>Papamoa Plaza</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/cart'>Cart</SidebarRoute>
                </SideBtnWrap>                
            </SidebarWrapper>
        </SidebarBox>
    );
}

export default Sidebar;
