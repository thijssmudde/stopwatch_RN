import React from 'react'
import {StatusBar} from "react-native"

import {Toast} from 'native-base'
import moment from 'moment' //Easily get timestamps/duration
import {Feather} from '@expo/vector-icons' //Feather Icon
import {
  StopWatchView,
  StopWatchTime,
  StopWatchActions,
  LapsView,
  LapButton,
  LapNumber,
  LapDuration,
  LapList
} from '../StyledComponents/StopWatch' //Styled components
import {formatDuration, getNewLapNumber, accumulateLapDuration} from '../helpers' //Show correct time format
import Button from '../Components/Button'
import LapItem from '../Components/LapItem'

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
    const {running} = this.state

    if (running) { //Only add lap if its running
      this.setState((state) => {
        let lapDuration = moment().unix() - state.timestart;
        if (state.laps[0] !== false) { //It was not resumed
          //2nd or more laps
          const totalLapsTime = accumulateLapDuration(state.laps)
          lapDuration -= totalLapsTime
        }

        return {
          //Add lap at the beginning
          laps: [
            {
              lapDuration,
              lapNumber: getNewLapNumber(state.laps)
            },
            ...state.laps
          ]
        }
      })
    } else { //Display Toast
      Toast.show({text: 'StopWatch is not running!', position: 'bottom', buttonText: 'Hide', type: 'danger'})
    }
  }

  renderTimestamp = (lap, index) => {
    return lap.pause === true
      ? null
      : <LapItem
        key={index}
        lapNumber={lap.lapNumber}
        duration={formatDuration(lap.lapDuration)}/>
  }

  render() {
    const {laps, running, currentTime, timestart} = this.state

    const duration = formatDuration(currentTime - timestart) //Format properly, just like timestamp

    const lapListItems = laps.map(this.renderTimestamp) //Render one LapItem

    return (
      <StopWatchView>

          <StatusBar barStyle="light-content"/>
        <StopWatchTime>{duration}</StopWatchTime>

        <StopWatchActions>
          {!running && timestart && <Button type='reset' onPress={this.start}/>}
          {!running && !timestart && <Button type='start' onPress={this.start}/>}
          {running && timestart && <Button type='stop' onPress={this.stop}/>}
          {!running && timestart && <Button type='resume' onPress={this.resume}/>}
        </StopWatchActions>

        <LapsView>
          <LapButton onPress={this.lap} running={running}>
            <Feather name='plus' size={32} color='#333'/>
          </LapButton>
          <LapList>
            {lapListItems}
          </LapList>
        </LapsView>
      </StopWatchView>
    )
  }
}