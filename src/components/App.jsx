import React, { PureComponent } from "react"
import 'Styles/App.css'
import Board from 'Containers/Board.jsx'

class App extends PureComponent {
  render() {
    return (
      <main>
        <Board/>
      </main>
    )
  }
}

export default App