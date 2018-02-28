export function formatDuration(duration) {
  return padWithZero(duration.hours(), 2) + ":" + padWithZero(duration.minutes(), 2) + ":" + padWithZero(duration.seconds(), 2);
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