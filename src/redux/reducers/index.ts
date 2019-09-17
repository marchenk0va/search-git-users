import { actionsType } from '../actions'
import { IState, IAction } from "./index.modules"

const initialState: IState = {
    users: [],
    isLoading: false,
    url: ''
}

export const usersReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionsType.START_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case actionsType.GET_USERS_ON_SUCCESS: {
            return {
                ...state,
                users: action.users
            }
        }
        case actionsType.GET_SELECTED_USER: {
            return {
                ...state,
                url: action.url
            }
        }
        case actionsType.END_REQUEST: {
            return {
                ...state,
                isLoading: false
            }
        }
        default:
			return { ...state }
    }
}