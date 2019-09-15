import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import "./index.scss"
import Header from "./containers/Header"
import Main from "./containers/Main"

const App = () => (
    <Provider store={store}>
        <div className="App">
            <Header />
            <Main />
        </div>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector("#root"))
