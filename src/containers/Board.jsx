import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cell from 'Components/Cell.jsx'

import { setPutin } from 'Actions/board'

class Board extends Component {
  get getCells() {
    const { rows, columns, matrixFigures } = this.props.data
    let result = []
    let resRow
    for (let i = 0; i < rows; i++) {
      resRow = []
      for (let j = 0; j < columns; j++) {
        resRow.push(
          <Cell
            key={`Cell=posX-${i}.posY-${j}`}
            posX={i}
            posY={j}
            isAlt={!(i%2) ? !!(j%2) : !(j%2)}
            elementId={matrixFigures[i][j]}/>
        )
      }
      result.push(resRow)
    }
    return result
  }
  render() {
    const { rows, columns } = this.props.data
    const max = Math.max(rows, columns)
    return (
      <div>
        <article id="Chess-Wrap">
          <section>
            {this.getCells}
          </section>
        </article>
        <style jsx global>{`
          #Chess-Wrap {
            width: ${ columns * (100 / max) }vmin;
            height: ${ rows * (100 / max) }vmin;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 0 0 20px black;
          }
          #Chess-Wrap section {
            width: calc(100% - 20px * 2);
            height: calc(100% - 20px * 2);
            display: grid;
            grid-template-rows: repeat(${rows}, ${100 / rows}%);
            grid-template-columns: repeat(${columns}, ${100 / columns}%);
            background-color: #B0BEC5;
          }
          #Chess-Wrap section > div {
            background-color: transparent;
            color: black;
          }
          #Chess-Wrap section > .alt {
            background-color: #455A64;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({ board }) => {
  return {
    data: board
  }
}

export default connect(mapStateToProps, { setPutin })(Board)