import { Dispatch } from "redux"
import { API, fetchData } from "../../utils"
import { IActionsType } from "./index.modules"

export const actionsType: IActionsType = {
    START_REQUEST: "START_REQUEST",
    GET_USERS_ON_SUCCESS: "GET_USERS_ON_SUCCESS",
    GET_SELECTED_USER: "GET_SELECTED_USER",
    END_REQUEST: "END_REQUEST"
}

export const getUsersList = async (dispatch: Dispatch, username: string) => {
    dispatch({ type: actionsType.START_REQUEST })
    try {
        const res = await fetchData(API.users(username))
        const data = res.data.items
        dispatch({
            type: actionsType.GET_USERS_ON_SUCCESS,
            users: data
        })
    } catch (err) {
        return err
    }
    dispatch({ type: actionsType.END_REQUEST })
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