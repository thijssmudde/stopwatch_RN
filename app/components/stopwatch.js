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
  Left,
  Toast
} from 'native-base'

import moment from 'moment' //Easily get timestamps/duration
import {Constants} from 'expo' //StatusBarHeight
import {Feather} from '@expo/vector-icons' //Feather Icon

import {
  ButtonText,
  StopwatchView,
  StopwatchTime,
  StopwatchActions,
  LapsView,
  LapButton,
  LapNumber,
  LapDuration,
  LapList
} from '../styledComponents/stopwatch' //Styled components

import {formatDuration, getNewLapNumber, accumulateLapDuration} from '../helpers' //Show correct time format

import Button from '../components/Button'
import LapItem from '../components/LapItem'

const defaultLap = {
  pause: true,
  lapNumber: -1,
  lapDuration: -1
}

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
        laps: [defaultLap]
      }
    }, () => {
      this.startTimer()
    })
  }

  resume = () => {
    //update the timestart to continue with same time
    this.setState(state => {
      const timeDiff = this.state.timestop - this.state.timestart
      const timestart = moment().unix() - timeDiff;

      return {
        timestart,
        laps: [
          defaultLap, ...state.laps
        ],
        running: true,
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
    const {running} = this.state

    if (running) { //Only add lap if its running
      this.setState((state) => {
        let lapDuration;
        if (state.laps[0] === false) { //It was resumed
          lapDuration = moment().unix() - state.timestart
        } else { //2nd or more laps
          let totalLapsTime = accumulateLapDuration(state.laps)
          lapDuration = moment().unix() - state.timestart - totalLapsTime
        }

        let lapNumber = getNewLapNumber(state.laps)

        let lap = {
          lapDuration,
          lapNumber
        }

        return {
          //Add lap at the beginning
          laps: [
            lap, ...state.laps
          ]
        }
      })
    } else { //Display Toast
      Toast.show({text: 'StopWatch is not running!', position: 'bottom', buttonText: 'Hide', type: 'danger'})
    }
  }

  renderTimestamp = (lap, index) => { //No hard calculations, just render responsibility
    if (lap.pause === true) {
      return null
    }
    const {laps} = this.state

    let lapNumber = lap.lapNumber;

    let duration = moment.duration(lap.lapDuration * 1000)
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
          {!running && timestart && <Button type='reset' onPress={this.start}>
          </Button>}

          {/* START */}
          {!running && !timestart && <Button type='start' onPress={this.start}>
          </Button>}

          {/* RESUME */}
          {!running && timestart && <Button type='resume' onPress={this.resume}>
          </Button>}

          {/* STOP */}
          {running && timestart && <Button type='stop' onPress={this.stop}>
          </Button>}
        </StopwatchActions>

        <LapsView>
          {/* Adding laps */}
          <LapButton onPress={this.lap} running={running}>
            <Feather name='plus' size={32} color='#333'/>
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
