import styled from "styled-components";

import {Header, Title} from "native-base"
import {LinearGradient} from "expo";

import Image from "react-native-remote-svg"

//Attach color props to the LinearGradient
export const Gradient = styled(LinearGradient).attrs({
  colors: ["#392F83", "#33306A", "#252B45"],
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

export const Pyramid = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 120;
  left: 0;
  z-index: -1;
`