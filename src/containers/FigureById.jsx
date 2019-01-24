import React, { Component } from 'react'

import Pawn from 'Components/figures/Pawn.jsx'
import Horse from 'Components/figures/Horse.jsx'
import Bishop from 'Components/figures/Bishop.jsx'
import Tower from 'Components/figures/Tower.jsx'
import Queen from 'Components/figures/Queen.jsx'
import King from 'Components/figures/King.jsx'

class FigureById extends Component {
  render() {
    const { figureId, theme } = this.props
    if (Array.isArray(figureId)) {
      const baseConf = { player: figureId[0], theme: theme }
      switch (figureId[1]) {
        case  6: return <King {...baseConf} />
        case  5: return <Queen {...baseConf} />
        case  4: return <Tower {...baseConf} />
        case  3: return <Bishop {...baseConf} />
        case  2: return <Horse {...baseConf} />
        case  1: return <Pawn {...baseConf} />
        case  0: return <></>
        default: return <>Figure ID: { figureId }</>
      }
    } else {
      return <></>
    }
  }
}

export default FigureById