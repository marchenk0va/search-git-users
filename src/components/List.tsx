import * as React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Card from "./Card"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0.9;
`

const List = (props: any) => {
    const { users } = props.users
    return (
        <Container>
            {
                users.map((user: any, index: number) => (
                    <Card key={index} user={user} />
                ))
            }
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
	users: state.users,
})

export default connect(mapStateToProps, null)(List)