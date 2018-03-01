import styled from "styled-components"
import {Text, View} from "react-native"
import {Button, List, ListItem} from "native-base"

export const StopwatchView = styled.View `
  top: 100;
  justifyContent: center;
  alignItems: center;
`

export const StopwatchTime = styled.Text `
  fontFamily: gt-pressura-mono-bold;
  color: #fff;
  letterSpacing: 0;
  fontSize: 72;
`

export const StopwatchActions = styled.View `
  display: flex;
  flexDirection: row;
  marginTop: 25;
`

// Laps
export const LapsView = styled.View `
  width: 100%;
  marginLeft: 60;
`

export const LapButton = styled(Button)`
  position: absolute;
  top: 50;
  width: 50;
  height: 50;
  borderRadius: 25;
  backgroundColor: ${props => props.running
  ? '#fff'
  : '#ccc'};
  justifyContent: center;

  ${props => props.running && `
    shadowColor: #000;
    shadowOffset: 0px 12px;
    shadowOpacity: 0.58;
    shadowRadius: 16.00px;
    elevation: 24px;
  `}
`

export const LapNumber = styled.Text `
  color: #fff;
  fontFamily: gt-pressura-mono-bold;
  fontSize: 22;
`

export const LapDuration = styled.Text `
  color: #fff;
  fontFamily: gt-pressura-mono-bold;
  fontSize: 22;
  alignSelf: flex-end;
  marginLeft: 50;
`

export const LapList = styled(List)`
  position: absolute;
  right: 60;
  top: 40;
`

export const LapItemStyled = styled(ListItem)`
  borderBottomWidth: 0;
`