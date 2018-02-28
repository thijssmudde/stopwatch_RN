import React from "react"
import Expo from "expo";
import {StyleSheet, Text, View} from "react-native"
import {Container, Body, Content} from "native-base"

import {Gradient, AppHeader, HeaderTitle} from "./app/styledComponents/root"

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
      .loadAsync({"gt-walsheim-regular": require("./app/assets/fonts/GT-Walsheim-Regular.ttf"), "gt-walsheim-medium": require("./app/assets/fonts/GT-Walsheim-Medium.ttf"), "gt-walsheim-bold": require("./app/assets/fonts/GT-Walsheim-Bold.ttf")})

    this.setState({loading: false})
  }

  render() {
    if (this.state.loading) { //Show loading screen until all assets are loaded
      return <Expo.AppLoading/>;
    } else {

      return (
        <Container>
          {/* Styled Gradient */}
          <Gradient>
            {/* Styled Header*/}
            <AppHeader>
              <Body>
                {/* Styled Title*/}
                <HeaderTitle>STOPWATCH</HeaderTitle>
              </Body>
            </AppHeader>
            <Content>
              <StopWatch/>
            </Content>
          </Gradient>
        </Container>
      );
    }
  }
}