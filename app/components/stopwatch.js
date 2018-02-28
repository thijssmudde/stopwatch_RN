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
  Button,
  H1
} from "native-base"

import moment from "moment"

import styles from "./stopwatchStyles"
import {formatDuration} from "../helpers" //Show correct time format

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      running: false,
      currentTime: null,
      timestart: null,
      laps: []
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer) //Release the timer
  }

  start = () => { //Press START/RESTART
    this.setState({
      running: true,
      timestart: moment().unix(),
      currentTime: moment().unix(),
      laps: []
    })

    this.startTimer()
  }

  resume = () => {
    //update the timestart to continue with same time
    let timestart = moment().unix() - (this.state.timestop - this.state.timestart);

    this.setState({running: true, timestart})

    this.startTimer()
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: moment().unix()
      })
    }, 1000)
  }

  stop = () => { //Press STOP
    clearInterval(this.timer) //Release the timer

    this.setState({
      running: false,
      timestop: moment().unix()
    })
  }

  lap = () => { //Press LAP
    this.setState({
      //add lap
      laps: [moment().unix()].concat(this.state.laps)
    })
  }

  renderTimestamp = (lap, index) => {
    const {laps} = this.state
    let {timestart} = this.state

    //check if previous lap exists
    if (laps && laps[index + 1]) {
      timestart = laps[index + 1]
    }

    let duration = moment.duration((lap - timestart) * 1000)
    let formattedDuration = formatDuration(duration)

    return (
      <ListItem key={index}>
        <Text>{formattedDuration}</Text>
      </ListItem>
    )
  }

  render() {
    const {laps, running, timestart, currentTime} = this.state

    let duration = moment.duration((currentTime - timestart) * 1000)
    let stopwatchTime = formatDuration(duration)

    let times = laps.map(this.renderTimestamp)

    // console.log("timestart", timestart)

    return (
      <View>
        {/* START */}
        {!running && !timestart && <Button rounded block style={styles.start}
         onPress={this.start}>
          <Text style={styles.button}>START</Text>
        </Button>}

        {/* RESUME */}
        {!running && timestart && <Button rounded block style={styles.resume}
         onPress={this.resume}>
          <Text style={styles.button}>RESUME</Text>
        </Button>}

        {/* RESTART */}
        {!running && timestart && <Button rounded block style={styles.restart}
         onPress={this.start}>
          <Text style={styles.button}>RESTART</Text>
        </Button>}

        {/* STOP */}
        {running && timestart && <Button rounded block style={styles.stop}
         onPress={this.stop}>
          <Text style={styles.button}>STOP</Text>
        </Button>}

        {/* LAP */}
        {running && <Button roundedblock style={styles.lap}
         onPress={this.lap}>
          <Text style={styles.button}>LAP</Text>
        </Button>}

        <Text style={styles.time}>{stopwatchTime}</Text>

        {/* List divider explanation */}
        {!!laps.length && <List>
          <ListItem itemDivider first>
            <H1>LAPS: {laps.length}</H1>
          </ListItem>
        </List>}

        {/* A cool list of laps */}
        {!!laps.length && <List>
          {times}
        </List>}
      </View>
    )
  }
}
