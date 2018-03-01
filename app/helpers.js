export function formatDuration(duration) {
  return padWithZero(duration.hours(), 2) + ":" + padWithZero(duration.minutes(), 2) + "." + padWithZero(duration.seconds(), 2);
}

//Transforms 9 to 09, for all numbers below 10
function padWithZero(input, length) {
  // Cast input to string
  input = "" + input;

  let paddingSize = Math.max(0, length - input.length);
  return new Array(paddingSize > 0
    ? paddingSize + 1
    : 0).join("0") + input;
}

export function getNewLapNumber(laps) {
  //find highest laps.lapNumber or return 1

  return getMaxLapNumber(laps, "lapNumber") + 1 || 1
}

//Get Maximum Y value in {x,y} array for specific x value
function getMaxLapNumber(array, selector) {
  return Math.max(...array.map(o => o[selector]))
}

export function accumulateLapDuration(laps) {
  //add up all lapDuration until you reach pause = true

  let result = 0
  laps.forEach(lap => {
    if (lap.pause === true) {
      return
    } else {
      result += lap.lapDuration
    }
  })
  return result
}
