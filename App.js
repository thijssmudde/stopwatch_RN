import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {
  Container,
  Header,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Button
} from "native-base"

import moment from "moment"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      timestart: null,
      laps: [
        {
          key: 1,
          time: new moment().unix() - 120
        }, {
          key: 2,
          time: new moment().unix() - 60
        }
      ]
    }
  }

  start = () => {
    const {started} = this.state

    if (started) {
      this.setState({started: false, timestart: null})
    } else {
      this.setState({
        started: true,
        timestart: new moment().unix()
      })
    }
  }

  render() {
    const {laps, started} = this.state;

    let time = started ? started.format('HH : mm : ss') : "00:00";

    return (
      <Container>
        <Header>
          <Body>
            <Title>StopWatch</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>{time}</Text>
          <Button full onPress={this.start}>
            <Text style={styles.button}>{started
                ? "RESUME"
                : "START"}</Text>
          </Button>
          <Button full onPress={this.stop}>
            <Text style={styles.button}>{started
                ? "STOP"
                : "RESTART"}</Text>
          </Button>
          <Button full onPress={this.lap}>
            <Text style={styles.button}>LAP</Text>
          </Button>
          <Text>
            LAPS: {laps.map(lap => <Text key={lap.key}>Lap {lap.key}: {lap.time}</Text>)}
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: "white"
  }
})
