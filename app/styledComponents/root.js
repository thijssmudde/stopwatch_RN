import styled from "styled-components";

import {Header, Title} from "native-base"
import {LinearGradient} from 'expo';

//Attach color props to the LinearGradient
export const Gradient = styled(LinearGradient).attrs({
  colors: ['#4c669f', '#3b5998', '#192f6a'],
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`

export const AppHeader = styled(Header)`
  backgroundColor: transparent;
  borderBottomWidth: 0;
`

export const HeaderTitle = styled(Title)`
  fontFamily: "gt-walsheim-bold";
  color: white;
  letterSpacing: 2;
`;