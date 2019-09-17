import * as React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IState } from "../../redux/reducers/index.modules";
import { getUsersListAction } from "../../redux/actions";
import { useDebounce } from "../../utils";
import { ISearchProps } from "./Search.modules";
const image = require("../../../assets/images/search.png");

const Container = styled.div`
  height: 100%;
  font-size: 14px;
  position: relative;
  flex: 0.2;
  border: 2px solid rgb(0, 48, 179, 0.5);
  border-radius: 3px;
  align-items: center;

  span {
    position: absolute;
    padding: 9px 4px;
    right: 5px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const Input = styled.input`
  font-size: 14px;
  height: 100%;
  border: none;
  padding: 8px;

  &:focus {
    outline: none;
  }
`;

const Search = ({ getUsersList }: ISearchProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedInputValue = useDebounce(inputValue, 700);

  React.useEffect(() => {
    if (debouncedInputValue) {
      getUsersList(inputValue);
    }
  }, [debouncedInputValue]);

  function inputValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={e => inputValueHandler(e)}
        placeholder="Search..."
      />
      <span>
        <img src={image} />
      </span>
    </Container>
  );
};

const mapStateToProps = (state: IState) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsersList: getUsersListAction(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
