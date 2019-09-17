import { IState } from "./index.modules"

export interface IUsers {
    
}

export interface IState {
    users: any
    isLoading: boolean
    url: string
}

export interface IAction {
    type: string
    users: IState
    url: IState
}