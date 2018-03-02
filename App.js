import React from "react"
import Expo from "expo"; //Loading Screen
import {Platform, Text, StyleSheet, View} from "react-native"
import {Root, Container} from "native-base"

import {Gradient, AppHeader, AppHeaderSide, AppHeaderBody, HeaderTitle, Pyramid} from "./app/styledComponents/app"

import StopWatch from "./app/components/stopwatch"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true //Are assets loaded
    }
  }

  async componentWillMount() {
    // Load in fonts first
    await Expo
      .Font
      .loadAsync({"gt-walsheim-regular": require("./app/assets/fonts/GT-Pressura-Mono-Regular.ttf"), "gt-walsheim-medium": require("./app/assets/fonts/GT-Walsheim-Medium.ttf"), "gt-walsheim-bold": require("./app/assets/fonts/GT-Walsheim-Bold.ttf"), "gt-pressura-mono-regular": require("./app/assets/fonts/GT-Pressura-Mono-Regular.ttf"), "gt-pressura-mono-bold": require("./app/assets/fonts/GT-Pressura-Mono-Bold.ttf")})

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
              <View>
                <StopWatch/>
              </View>
              {/* Styled Image */}
              <Pyramid source={require("./app/assets/img/pyramid.svg")}/>
            </Gradient>
          </Container>
        </Root>
      );
    }
  }
}