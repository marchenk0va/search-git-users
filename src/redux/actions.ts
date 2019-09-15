import { Dispatch } from "redux"
import { getUsers, API } from "../utils"

interface IActionsType {
    GET_USERS_ON_SUCCESS: string
    GET_SELECTED_USER: string
}

export const actionsType: IActionsType = {
    GET_USERS_ON_SUCCESS: "GET_USERS_ON_SUCCESS",
    GET_SELECTED_USER: "GET_SELECTED_USER"
}

export const getUsersList = async (dispatch: Dispatch, username: string) => {
    try {
        const res = await getUsers(`https://api.github.com/search/users?q=${username}+in%3Alogin&type=Users`)
        const data = res.data.items
        dispatch({
            type: actionsType.GET_USERS_ON_SUCCESS,
            users: data
        })
    } catch (err) {
        return err
    }
}

export const setSelectedUserUrl = (dispatch: Dispatch, selectedUserURL: string) =>
    dispatch({
        type: actionsType.GET_SELECTED_USER,
        url: selectedUserURL
    })

export const getUsersListAction = (dispatch: Dispatch) => (
	username: string
) => getUsersList(dispatch, username)

export const setSelectedUserAction = (dispatch: Dispatch) => (
    selectedUserURL: string
) => setSelectedUserUrl(dispatch, selectedUserURL)