import React from 'react'
import {LapItemStyled, LapNumber, LapDuration} from '../StyledComponents/StopWatch'

const LapItem = (props) => {
  return (
    <LapItemStyled>
      <LapNumber>Lap {props.lapNumber}</LapNumber>
      <LapDuration>{props.duration}</LapDuration>
    </LapItemStyled>
  )
}

export default LapItem