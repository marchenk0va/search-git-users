import * as React from "react"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import styled from "styled-components"
import { setSelectedUserAction } from "../redux/actions"

const Container = styled.div`
    text-align: center;
    margin: 20px;
    padding: 10px;
`

const Avatar = styled.img`
    width: 94px;
    height: 94px;
    border-radius: 50%;
`

const Card = ({user, setSelectedUserUrl}: any) => {
    return (
        <Container onClick={() => setSelectedUserUrl(user.url)}>
            <Avatar src={user.avatar_url} />
            <p>{user.login}</p>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setSelectedUserUrl: setSelectedUserAction(dispatch)
})

export default connect(null, mapDispatchToProps)(Card)