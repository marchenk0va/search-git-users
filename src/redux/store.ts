import { combineReducers, createStore } from "redux"
import { usersReducer } from "./reducers"

const rootReducer = combineReducers({
	users: usersReducer,
})

const store = createStore(rootReducer)

export default store
