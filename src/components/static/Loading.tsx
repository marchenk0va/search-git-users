import * as React from "react";
import styled, { keyframes } from "styled-components";
// @ts-ignore
import image from "../../../assets/images/loading.png";

const spinner = keyframes`
    to { transform: rotate(-360deg) }
`;

const Container = styled.div`
  margin: 150px;
  animation: ${spinner} 1.1s linear infinite;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Loading = () => (
  <Container>
    <Image src={image} />
  </Container>
);

export default Loading;
