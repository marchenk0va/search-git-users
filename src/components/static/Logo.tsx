import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import image from "../../../assets/images/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 5px 0 20px;
`;

const Logo = () => (
  <Container>
    <Image src={image} />
    <span>GitUsers</span>
  </Container>
);

export default Logo;
