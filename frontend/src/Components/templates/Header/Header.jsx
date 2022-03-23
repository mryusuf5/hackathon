import React from "react";
import styled from "styled-components";
import LeergeldLogo from "../../../Assets/Images/leergeld.png";
import LeergeldImage from "../../../Assets/Images/leergeld_foto1.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <Headermain>
      <LogoContainer>
        <NavLogo to="/"><LeergeldLogoTag src={LeergeldLogo} alt="" /></NavLogo>
      </LogoContainer>
      <NavItemContainer>
        <NavItem to="/"><h2>Home</h2></NavItem>
        <NavItem to="/Donation"><h2>Steun ons</h2></NavItem>
        <NavItem to="/Overons"><h2>Over ons</h2></NavItem>
        <NavItem to="/Contact"><h2>Contact</h2></NavItem>
        <NavItem to="/Login"><h2>Login</h2></NavItem>
      </NavItemContainer>
      
    </Headermain>
  );
};

export default Header;

const Headermain = styled.nav`
  background-color: ${props=>props.theme.colors? props.theme.colors.primary:"black"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 20px;
  padding: 20px 10px 0 10px;
`;

const LogoContainer = styled.div`
`;

const LeergeldLogoTag = styled.img`
width: 10%;
`;

const NavItem = styled(NavLink)`
  color: ${props => props.isSelected? "red" : "black"};
  text-decoration: none;
`;

const NavLogo = styled(NavLink)`
  
`;

const NavItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  justify-content: center;
  position: static;
  top: 0;
`;