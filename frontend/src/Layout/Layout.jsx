import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <Div>
      <Header />
      <Body>{children}</Body>

      <Footer />
    </Div>
  );
};

export default Layout;

const Div = styled.div`
  max-width: 1280px;
  width: 100vw;

  /* margin: auto; */
  /* background-color: ${(props) => (props.back ? "black" : "green")}; */
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;
