import React, { Component } from 'react'
import { connect } from 'react-redux'
import FigureById from 'Containers/FigureById.jsx'

class Cell extends Component {
  render() {
    const { isAlt, posX, posY, figureId, theme } = this.props
    return (
      <div className={isAlt ? 'alt' : ''}>
        <FigureById figureId={figureId} theme={theme}/>
      </div>
    )
  }
}

function mapStateToProps({ board }, props) {
  const { posX, posY } = props
  return {
    ...props,
    figureId: board.matrixFigures[posX][posY],
    theme: board.theme
  }
}

export default connect(mapStateToProps)(Cell)