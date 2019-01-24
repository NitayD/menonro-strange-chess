import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.jsx"
import './styles/normalize.css'

import { Provider } from 'react-redux'
import store from './store'

// import config from './chess.config'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)