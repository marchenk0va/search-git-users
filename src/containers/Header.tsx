import * as React from "react";
import styled from "styled-components";
import Search from "../components/Search/Search";
import Logo from "../components/static/Logo";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: normal;
    color: #777777;
    padding: 10px;
  }
`;

const Header = () => (
  <Container>
    <Logo />
    <SearchContainer>
      <span>Look for Git users by name</span>
      <Search />
    </SearchContainer>
  </Container>
);

export default Header;
