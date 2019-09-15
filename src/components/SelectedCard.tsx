import * as React from "react"
import axios from "axios"
import styled from "styled-components"
import { connect } from "react-redux"
import Empty from "./static/Empty"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.2;
`

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const SelectedCard = ({url}: any) => {
    const [data, setData]: any = React.useState([])

    async function fetchData(url: any) {
        try {
            const res = await axios.get(`${url.url}`)
            const data = res.data
            setData(data)
        } catch (err) {
            return err
        }
    }

    React.useEffect(() => {
        fetchData(url)
    }, [url])

    return (
        <>
            {
                data ? 
                <Container>
                    <Avatar src={data.avatar_url} />
                    <h3>{data.login}</h3>
                    <p>{data.bio}</p>
                </Container>
                :
                <Empty />
            }          
        </>
    )
}

const mapStateToProps = (state: any) => ({
	url: state.users,
})

export default connect(mapStateToProps, null)(SelectedCard)