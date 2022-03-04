function kToF(kelvin) {
  return Math.round(((kelvin - 273.15) * 1.8 + 32) * 10) / 10;
}

function kToC(kelvin) {
  return Math.round((kelvin - 273.15) * 10) / 10
}