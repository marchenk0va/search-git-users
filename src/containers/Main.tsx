import * as React from "react";
import styled from "styled-components";
import List from "../components/List/List";
import SelectedUser from "../components/SelectedUser/SelectedUser";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Main = () => (
  <Container>
    <List />
    <SelectedUser />
  </Container>
);

export default Main;
