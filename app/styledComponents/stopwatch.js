import styled from 'styled-components'
import {Dimensions, Text, View} from 'react-native'
import {Button, List, ListItem} from 'native-base'

const {width, height} = Dimensions.get('window')

export const StopWatchView = styled.View `
  top: 100;
  justifyContent: center;
  alignItems: center;
`

export const StopWatchTime = styled.Text `
  fontFamily: gt-pressura-mono-bold;
  color: #fff;
  letterSpacing: 0;
  fontSize: 72;
`

export const StopWatchActions = styled.View `
  display: flex;
  flexDirection: row;
  marginTop: 25;
`

// Laps
export const LapsView = styled.View `
width: ${width}px;
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