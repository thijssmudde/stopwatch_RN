import styled from "styled-components"

import {Dimensions, Platform} from "react-native"
import {Header, Title, Body} from "native-base"
import {LinearGradient, Constants} from "expo"

import Image from "react-native-remote-svg"

//Attach color props to the LinearGradient
export const Gradient = styled(LinearGradient).attrs({
  colors: ["#392F83", "#33306A", "#252B45"]
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
  top: ${Platform.OS === "android"
  ? Constants.statusBarHeight
  : 0};
`

export const AppHeaderBody = styled(Body)`
  flex: 3;
  justifyContent: center;
  alignItems: center;
`

export const HeaderTitle = styled(Title)`
  fontFamily: gt-walsheim-bold;
  color: white;
  letterSpacing: 2;
  textAlign: center;
`;

export const Pyramid = styled(Image)`
  position: absolute;
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
  top: 120;
  left: 0;
  z-index: -1;
`