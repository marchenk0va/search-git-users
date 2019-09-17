import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchData } from "../../utils";
import Empty from "../static/Empty";
import Repos from "../Repos/Repos";
import { IState } from "../../redux/reducers/index.modules";
import { ISelectedUserProps } from "./SelectedUser.modules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  height: 100%;
  margin: 20px 0;
  padding: 24px 30px;
  align-items: center;
  border: 3px solid rgb(0, 48, 179);
  box-shadow: rgb(0, 48, 179) 5px 6px 0px 0px;
  background-color: #ffffff;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  color: #2e3ccb;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Description = styled.p`
  color: #5c5c5c;
  text-align: center;
  padding-bottom: 10px;
`;

const SelectedUser = ({ url }: ISelectedUserProps) => {
  const [data, setData]: any = React.useState([]);
  const { avatar_url, html_url, login, bio } = data;
  const userUrl = url.url;

  const getUserData = async (URL: any) => {
    try {
      const res = await fetchData(URL);
      const data = res.data;
      setData(data);
    } catch (err) {
      return err;
    }
  };

  React.useEffect(() => {
    getUserData(userUrl);
  }, [userUrl]);

  return (
    <>
      {userUrl.length > 0 ? (
        <Container>
          <Avatar src={avatar_url} />
          <Link href={html_url} target="_blank">
            {login}
          </Link>
          <Description>{bio}</Description>
          <Repos />
        </Container>
      ) : (
        <Empty />
      )}
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  url: state.users
});

export default connect(
  mapStateToProps,
  null
)(SelectedUser);
