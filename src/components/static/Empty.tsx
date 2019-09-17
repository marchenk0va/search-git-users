import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import image from "../../../assets/images/github-grey.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  height: 100%;
  margin: 20px 0;
  padding: 30px 20px;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Text = styled.p`
  color: #c9cacc;
  padding: 10px;
  font-weight: bold;
`;

const Empty = () => (
  <Container>
    <Image src={image} />
    <Text>Select User</Text>
  </Container>
);

export default Empty;
