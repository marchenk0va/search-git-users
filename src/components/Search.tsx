import * as React from "react"
import * as _ from "lodash"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { getUsersListAction } from "../redux/actions"
import { useDebounce } from "../utils"

const Search = ({getUsersList, users}: any) => {
    const [inputValue, setInputValue] = React.useState("")
    const debouncedInputValue = useDebounce(inputValue, 700)

    React.useEffect((): void => {
        if (debouncedInputValue) {
            getUsersList(inputValue)
        }
    }, [debouncedInputValue])

    function inputValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault()
        setInputValue(event.target.value)
	}

    return (
        <input 
            value={inputValue}
            onChange={e => inputValueHandler(e)}
            placeholder="Search..."
        />
    )
}

const mapStateToProps = (state: any) => ({
	users: state.users,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsersList: getUsersListAction(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)