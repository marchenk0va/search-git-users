import * as React from "react"
import styled from "styled-components"
import Search from "../components/Search"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Header = () => (
    <Container>
        <div>
            GitHub Users
        </div>
        <Search />
    </Container>
)

export default Header