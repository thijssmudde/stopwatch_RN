import styled from "styled-components";
import {Text, View} from "react-native"
import {Button, List, ListItem} from "native-base"

//Attach color props to the LinearGradient
export const ButtonText = styled.Text `
  fontFamily: gt-walsheim-bold;
  color: #333;
  fontSize: 18;
  letterSpacing: 2;
`

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

export const ResetButton = styled(Button)`
  backgroundColor: #FFF;
  marginHorizontal: 30;
  flex: 1;
`

export const StartButton = styled(Button)`
  backgroundColor: #E2E419;
  marginHorizontal: 30;
  flex: 1;
`

export const StopButton = styled(Button)`
  backgroundColor: #E42B6B;
  marginHorizontal: 30;
  flex: 1;
`

export const ResumeButton = styled(Button)`
  backgroundColor: #39B54A;
  marginHorizontal: 30;
  flex: 1;
`

// Laps
export const LapsView = styled.View`
  width: 100%;
  marginLeft: 60;
`

export const LapButton = styled(Button)`
  position: absolute;
  top: 50;
  width: 50;
  height: 50;
  borderRadius: 25;
  backgroundColor: ${props => props.running ? '#fff' : '#ccc'};
  justifyContent: center;
`

export const LapList = styled(List)`
  position: absolute;
  right: 60;
  top: 40;
`

export const LapItem = styled(ListItem)`
  borderBottomWidth: 0;
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