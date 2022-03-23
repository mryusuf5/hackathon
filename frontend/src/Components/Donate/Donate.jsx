import React from "react";
import styled from "styled-components";
import swimingChild from "../../Assets/swimming.png";
const Donate = () => {
  // functions
  const selectItem = () => {};
  return (
    <Container>
      <Item>
        {/* image */}
        <ImgContainer>
          <ColorOverlay />
          <Image src={swimingChild} alt="swimming childern" />
        </ImgContainer>
        {/* content */}
        <Content>
          <Title>Jouw donatie dekt...</Title>
          <DonateItems>
            <DonateItem onclick={selectItem}>
              <Value>500,- euro</Value>
              <Desc>
                doneer 20 sportspullen naar eigen wensen voor 10 kinderen in
                elke regio van nederland. <br />{" "}
              </Desc>
            </DonateItem>
            <DonateItem onclick={selectItem}>
              <Value>1500,- euro</Value>
              <Desc>
                doneer 50 sportspullen naar eigen wensen voor 10 kinderen in
                elke regio van nederland. <br />{" "}
              </Desc>
            </DonateItem>
            <DonateItem onclick={selectItem}>
              <Value>2500,- euro</Value>
              <Desc>
                doneer 100 sportspullen naar eigen wensen voor 10 kinderen in
                elke regio van nederland. <br />{" "}
              </Desc>
            </DonateItem>
          </DonateItems>
          <Title>looptijd</Title>
          <DonateItems>
            <LoopTijdItem onclick={selectItem}></LoopTijdItem>
          </DonateItems>
        </Content>
      </Item>
      {/* <Item></Item>
      <Item></Item> */}
    </Container>
  );
};

export default Donate;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: center; */
  padding-bottom: 13rem;
  width: 100%;
`;
const Item = styled.div`
  width: 40rem;
  /* height: 40rem; */
  background-color: whitesmoke;
  margin: 0.5rem;
  border-radius: 14px 4px 14px 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ImgContainer = styled.div`
  position: relative;
`;
const ColorOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  transition: 0.4s;
  &:hover {
    opacity: 0.3;
    transition: 0.4s ease all;
  }
`;
const Image = styled.img`
  contain: layout;
  height: 50%;
  width: 100%;
  /* opacity: 0.7; */
  border-radius: 14px 4px 14px 4px;

  &:hover {
    opacity: 0.9;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  font-size: 28px;
  font-family: fantasy;
  font-weight: 600;
  color: gray;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`;
const DonateItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 14px;
`;
const DonateItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
  /* height: 8rem; */
  /* border: 1px solid gray; */
  padding: 0.5rem;
  margin-left: 4px;
  border-radius: 12px 0 12px 0;
  transition: 0.2s ease-in all;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-out all;
    border: 0.5px solid orange;
  }
`;
const Value = styled.p`
  margin: 0;
  color: orange;
  font-size: 25px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const Desc = styled.p`
  margin: 0;
  text-align: center;
  color: gray;
  font-size: 12px;
  margin-top: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2px;
`;
const LoopTijdItem = styled.div``;
