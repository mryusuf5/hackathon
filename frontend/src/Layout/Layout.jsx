import React from "react";
import styled from "styled-components";
import Header from "../Components/templates/Header/Header";

const Layout = ({ children }) => {
  return (
    <Div>
      <Header/>
      <main>{children}</main>
    </Div>
  );
};

export default Layout;

const Div = styled.div`
  // max-width: 1280px;
  // width: 100%;
  // margin: auto;
`;
