import React, { Component } from "react"
import { connect } from 'react-redux'

import { setPutin } from './../actions/board'

class Board extends Component {
  shouldComponentUpdate(props, state) {
    console.log('Should ',props)
    return true
  }
  changePutin = (e) => {
    const { setPutin, data } = this.props
    const val = `${e.target.value}`
    return (val !== data) ? setPutin(val) : false
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <input type="text" value={this.props.data} onChange={this.changePutin}/>
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