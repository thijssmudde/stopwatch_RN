import React from "react"
import {StyleSheet, Text, View} from "react-native"

import {
  Container,
  Header,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Button,
  Left,
  Toast
} from "native-base"

import moment from "moment" //Easily get timestamps/duration
import {Constants} from "expo" //StatusBarHeight
import {Feather} from "@expo/vector-icons" //Feather Icon

import {
  ButtonText,
  StopwatchView,
  StopwatchTime,
  StopwatchActions,
  ResetButton,
  StartButton,
  StopButton,
  ResumeButton,
  LapsView,
  LapButton,
  LapNumber,
  LapDuration,
  LapList
} from "../styledComponents/stopwatch" //Styled components

import {formatDuration} from "../helpers" //Show correct time format

import LapItem from "../components/LapItem"

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      running: false,
      currentTime: null,
      timestart: null,
      laps: [],
      showToast: false
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer) //Release the timer
  }

  start = () => { //Press START/RESTART
    this.setState(state => {
      return {
        running: true,
        timestart: moment().unix(),
        currentTime: moment().unix(),
        laps: []
      }
    }, () => {
      this.startTimer()
    })
  }

  resume = () => {
    //update the timestart to continue with same time
    this.setState(state => {
      return {
        running: true,
        timestart: moment().unix() - (this.state.timestop - this.state.timestart),
        currentTime: moment().unix()
      }
    }, () => {
      this.startTimer()
    })
  }

  startTimer = () => {
    this.timer = setInterval(this.setCurrentTime, 1000) //Every second
  }

  setCurrentTime = () => {
    this.setState({
      currentTime: moment().unix()
    })
  }

  stop = () => { //Press STOP
    clearInterval(this.timer) //Release the timer

    this.setState({
      running: false,
      timestop: moment().unix()
    })
  }

  lap = () => { //Press LAP
    const {running, laps} = this.state

    if (running) {
      this.setState({
        //add lap at at beginning
        laps: [
          moment().unix(),
          ...laps
        ]
      })
    } else {
      Toast.show({text: "StopWatch is not running!", position: "bottom", buttonText: "Hide", type: "danger"})
    }
  }

  renderTimestamp = (lap, index) => {
    const {laps} = this.state
    let {timestart} = this.state

    //check if previous lap exists
    if (laps && laps[index + 1]) {
      timestart = laps[index + 1]
    }

    let lapNumber = laps.length - index;

    let duration = moment.duration((lap - timestart) * 1000)
    let formattedDuration = formatDuration(duration)

    return <LapItem key={index} lapNumber={lapNumber} duration={formattedDuration}/>
  }

  render() {
    const {laps, running, currentTime, timestart} = this.state

    const duration = moment.duration((currentTime - timestart) * 1000) //Calculate duration
    const stopwatchTime = formatDuration(duration) //Format properly, just like timestamp

    const lapListItems = laps.map(this.renderTimestamp) //Render one LapItem

    return (
      <StopwatchView>

        <StopwatchTime>{stopwatchTime}</StopwatchTime>

        <StopwatchActions>
          {/* RESTART */}
          {!running && timestart && <ResetButton rounded block onPress={this.start}>
            <ButtonText>RESET</ButtonText>
          </ResetButton>}

          {/* START */}
          {!running && !timestart && <StartButton rounded block onPress={this.start}>
            <ButtonText>START</ButtonText>
          </StartButton>}

          {/* RESUME */}
          {!running && timestart && <ResumeButton rounded block onPress={this.resume}>
            <ButtonText>RESUME</ButtonText>
          </ResumeButton>}

          {/* STOP */}
          {running && timestart && <StopButton rounded block onPress={this.stop}>
            <ButtonText>STOP</ButtonText>
          </StopButton>}
        </StopwatchActions>

        <LapsView>
          {/* Adding laps */}
          <LapButton onPress={this.lap} running={running}>
            <Feather name="plus" size={32} color="#333"/>
          </LapButton>

          {/* A cool list of laps */}
          <LapList>
            {lapListItems}
          </LapList>
        </LapsView>
      </StopwatchView>
    )
  }
}
