import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return <Div></Div>;
};

export default Layout;

const Div = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  background-color: ${(props) => (props.back ? "black" : "green")};
`;
