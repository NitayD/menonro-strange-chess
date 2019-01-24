import React from 'react'
import figure from 'Containers/HOC/figure.jsx'
import FigureProto from './FigureProto.jsx'

const Pawn = ({ player, theme }) => <FigureProto src={require(`Img/figures/${theme}/${player}/pawn.svg`)}/>

export default figure(Pawn)