const ftoc = function(fahrTemp) {
  let convOne = (fahrTemp - 32) / 1.8
  convOne = Math.round(convOne * 10) / 10
  return convOne;
};

const ctof = function(celsTemp) {
  let convTwo = (celsTemp * 1.8) + 32
  convTwo = Math.round(convTwo * 10) / 10
  return convTwo
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
