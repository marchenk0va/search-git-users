import { actionsType } from './actions'

interface IState {
    users: any
    url: string
}

const initialState: IState = {
    users: [],
    url: ''
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
        default:
			return { ...state }
    }
}