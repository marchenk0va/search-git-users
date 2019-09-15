import * as React from "react"
import styled from "styled-components"
import List from "../components/List"
import SelectedCard from "../components/SelectedCard"

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`

const Main = () => (
    <Container>
        <List />
        <SelectedCard />
    </Container>
)

export default Main