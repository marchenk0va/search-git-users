import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";
import { connect } from "react-redux";
import { IState } from "../../redux/reducers/index.modules";
import { IReposProps, IRepo } from "./Repos.modules";
import { fetchData } from "../../utils";
const image = require("../../../assets/images/star.png");

const Container = styled.li`
  display: flex;
  flex-direction: row;
  padding: 4px;
  flex-wrap: wrap;

  p {
    padding: 0 4px;
  }
`;

const StarImg = styled.img`
  width: 15px;
  height: 15px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: rgb(0, 48, 179);
  cursor: pointer;

  &:visited {
    color: rgb(0, 48, 179);
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Repos = ({ url }: IReposProps) => {
  const [data, setData] = React.useState([]);
  const orderedReposByStars = _.orderBy(data, ["stargazers_count"], ["desc"]);
  const reposList = orderedReposByStars.slice(0, 3);

  const getRepos = async (URL: string) => {
    try {
      const res = await fetchData(URL);
      const data = res.data;
      setData(data);
    } catch (err) {
      return err;
    }
  };

  React.useEffect(() => {
    getRepos(`${url.url}/repos`);
  }, [url]);

  return (
    <ul>
      {reposList.map((repo: IRepo, index: number) => (
        <Container key={index}>
          <span>
            <StarImg src={image} />
          </span>
          <p>{repo.stargazers_count}</p>
          <Link href={repo.html_url} target="_blank">
            {repo.name}
          </Link>
        </Container>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: IState) => ({
  url: state.users
});

export default connect(
  mapStateToProps,
  null
)(Repos);
