import { IState } from "../../redux/reducers/index.modules"

export interface IRepo {
    stargazers_count: string
    name: string
}

export interface IReposProps {
    url: IState
}