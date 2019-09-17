import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { setSelectedUserAction } from "../../redux/actions";
import { IUserProps } from "./User.modules";

const Container = styled.div`
  text-align: center;
  margin: 20px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: rgb(0, 48, 179);
  }
`;

const Avatar = styled.img`
  width: 94px;
  height: 94px;
  border-radius: 50%;
`;

const User = ({ user, setSelectedUserUrl }: IUserProps) => {
  const { url, avatar_url, login } = user;
  return (
    <Container onClick={() => setSelectedUserUrl(url)}>
      <Avatar src={avatar_url} />
      <p>{login}</p>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSelectedUserUrl: setSelectedUserAction(dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(User);
