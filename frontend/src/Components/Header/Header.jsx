import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>header</Container>;
};

export default Header;
const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: 6rem;
  background-color: lightgray;
  width: 100vw;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
