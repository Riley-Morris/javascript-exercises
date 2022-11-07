const ftoc = function(degree) {
  let converted = (degree - 32) * (5/9)
  let rounded = converted.toFixed(1)
  return +rounded
};

const ctof = function(degree) {
  let converted = (degree * (9/5)) + 32
  let rounded = converted.toFixed(1)
  return +rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
