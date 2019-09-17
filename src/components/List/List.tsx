import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import User from "../User/User";
import Loading from "../static/Loading";
import { IState } from "../../redux/reducers/index.modules";
import { IListProps } from "./List.modules";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0.8;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  margin: 20px;
  justify-content: center;
`;

const List = ({ users }: IListProps) => {
  const list = users.users;
  const { isLoading } = users;
  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        list.map((user: IState, index: number) => (
          <User key={index} user={user} />
        ))
      )}
    </Container>
  );
};

const mapStateToProps = (state: IState) => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(List);
