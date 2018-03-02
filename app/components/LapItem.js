import React from 'react'

import {LapItemStyled, LapNumber, LapDuration} from '../styledComponents/stopwatch'

const LapItem = (props) => {
  return (
    <LapItemStyled>
      <LapNumber>Lap {props.lapNumber}</LapNumber>
      <LapDuration>{props.duration}</LapDuration>
    </LapItemStyled>
  )
}

export default LapItem