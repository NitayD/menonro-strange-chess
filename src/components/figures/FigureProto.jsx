import React from 'react'

const noDrag = (e) => e.preventDefault()
const FigureProto = ({ src }) => <>
  <img src={src} onDragStart={noDrag}/>
  <style jsx>{`
    img {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `}</style>
</>

export default FigureProto