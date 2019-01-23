import React, { Component } from "react"
import '../styles/App.css'
import Board from './Board.jsx'

class App extends Component {
    render() {
        return (
            <main>
                <Board/>
            </main>
        );
    }
}

export default App