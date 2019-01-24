import React, { Component } from 'react'

function getCoords(elem) {
  var box = elem.getBoundingClientRect()
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}

function figure(InnerComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.wrap = React.createRef()
      this.state = {
        posX: 0,
        posY: 0,
        status: false,
        startX: false,
        startY: false,
        shiftX: false,
        shiftY: false
      }
    }
    handleMouseDown = ({ target, pageX, pageY }) => {
      const { left, top } = getCoords(target)
      this.setState({
        status: 'started',
        startY: top,
        startX: left,
        shiftX: pageX - left,
        shiftY: pageY - top,
      })
      document.onmousemove = this.handleMouseMove
      document.onmouseup = this.handleMouseUp
    }
    handleMouseMove = ({ clientX, clientY }) => {
      const { startX, startY, shiftX, shiftY } = this.state
      this.setState({
        posX: -(startX - clientX + shiftX),
        posY: -(startY - clientY + shiftY)
      })
    }
    handleMouseUp = (e) => {
      this.setState({
        status: false,
        posX: 0,
        posY: 0,
        startY: false,
        startX: false,
        shiftX: false,
        shiftY: false,
      })
      document.onmousemove = () => {}
      document.onmouseup = () => {}
    }
    render() {
      const { posX, posY, status } = this.state
      return (
        <figure
          className={`figure ${status === 'started' ? 'nohover' : ''}`}
          style={{
            transform: `translate(${posX}px, ${posY}px)`
          }}
          ref={this.wrap}
          onMouseDown={this.handleMouseDown}>
          <InnerComponent {...this.props}/>
          <style jsx global>{`
            #Chess-Wrap .figure {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
              transform: translate(0px, 0px)
            }
            #Chess-Wrap .figure img {
              display: block;
              max-height: calc(100% - 30px);
              max-width: calc(100% - 30px);
            }
          `}</style>
          <style jsx>{`
            figure:not(.nohover) { transition: all 0.05s ease-out; }
            figure:not(.nohover):hover { background-color: rgba(76,175,80, 0.3) }
          `}</style>
        </figure>
      )
    }
  }
}

export default figure