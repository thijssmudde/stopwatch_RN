import React from "react"
import Expo from "expo";
import {StyleSheet, View} from "react-native"
import {Root, Container, Body} from "native-base"

import {Gradient, AppHeader, HeaderTitle, Pyramid} from "./app/styledComponents/app"

import StopWatch from "./app/components/stopwatch"

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
      .loadAsync({"gt-walsheim-regular": require("./app/assets/fonts/GT-Walsheim-Regular.ttf"), "gt-walsheim-medium": require("./app/assets/fonts/GT-Walsheim-Medium.ttf"), "gt-walsheim-bold": require("./app/assets/fonts/GT-Walsheim-Bold.ttf"), "gt-pressura-mono-regular": require("./app/assets/fonts/GT-Pressura-Mono-Regular.ttf"), "gt-pressura-mono-bold": require("./app/assets/fonts/GT-Pressura-Mono-Bold.ttf")})

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
              <AppHeader>
                <Body>
                  {/* Styled Title */}
                  <HeaderTitle>STOPWATCH</HeaderTitle>
                </Body>
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