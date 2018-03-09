import React from "react"
import Expo from "expo"; //Loading Screen, loading fonts
import {Platform, View} from "react-native"
import {Root, Container} from "native-base"

import {
  Gradient,
  AppHeader,
  AppHeaderSide,
  AppHeaderBody,
  HeaderTitle,
  PyramidView,
  Pyramid
} from "./App/StyledComponents/App"

import Images from "./App/Themes/Images"
import StopWatch from "./App/Components/StopWatch"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true //Are assets loaded
    }
  }

  async componentWillMount() {
    // Load in fonts
    await Expo
      .Font
      .loadAsync({"gt-walsheim-regular": require("./App/Assets/Fonts/GT-Pressura-Mono-Regular.ttf"), "gt-walsheim-medium": require("./App/Assets/Fonts/GT-Walsheim-Medium.ttf"), "gt-walsheim-bold": require("./App/Assets/Fonts/GT-Walsheim-Bold.ttf"), "gt-pressura-mono-regular": require("./App/Assets/Fonts/GT-Pressura-Mono-Regular.ttf"), "gt-pressura-mono-bold": require("./App/Assets/Fonts/GT-Pressura-Mono-Bold.ttf")})

    if (Platform.OS === "android") {
      await Expo
        .Font
        .loadAsync({Roboto: require("native-base/Fonts/Roboto.ttf"), Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")})
    }

    this.setState({loading: false})
  }

  render() {
    if (this.state.loading) {
      //Show loading screen until all assets are loaded
      return <Expo.AppLoading/>;
    } else {
      return (
        <Root>
          <Container>
            {/* Styled Gradient */}
            <Gradient>
              {/* Styled Header */}
              <AppHeader noShadow>
                {/* Styled Body */}
                <AppHeaderBody>
                  {/* Styled Title */}
                  <HeaderTitle>STOPWATCH</HeaderTitle>
                </AppHeaderBody>
              </AppHeader>
              <PyramidView>
                {/* The svg doesnt show on Android, only when you scroll to the right */}
                {/* <Pyramid source={Images.pyramidSVG}/> */}

                {/*  */}
                {/* <Pyramid source={Images.pyramidPNG}/> */}
                <Pyramid source={Images.pyramidSVG}/>
              </PyramidView>
              <StopWatch/>
            </Gradient>
          </Container>
        </Root>
      );
    }
  }
}