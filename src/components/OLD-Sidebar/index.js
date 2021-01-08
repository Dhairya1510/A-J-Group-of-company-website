import React from 'react';
import {
  SidebarContainer, 
  Icon,
  CloseIcon, 
  Sidebarwrapper, 
  SidebarMenu, 
  SidebarLink, 
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon/> 
    </Icon>
    <Sidebarwrapper>
      <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to="discover" onClick={toggle}>
          Discover
        </SidebarLink>
        <SidebarLink to="services" onClick={toggle}>
          Services
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Sign Up
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
      </SideBtnWrap>
    </Sidebarwrapper>
    </SidebarContainer>  
  );
};

export default Sidebar;
