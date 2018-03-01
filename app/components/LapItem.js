import React from "react"
import {ListItem} from "native-base"

import {LapNumber, LapDuration} from "../styledComponents/stopwatch"

const LapItem = (props) => {
  return (
    <ListItem>
      <LapNumber>Lap {props.lapNumber}</LapNumber>
      <LapDuration>{props.duration}</LapDuration>
    </ListItem>
  )
}

export default LapItem