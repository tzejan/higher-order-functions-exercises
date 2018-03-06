function sum(array) {
  return array.reduce((acc, num) => acc  + num);
}

function productAll(array) {
  return array.reduce((acc, arr) => acc * arr.reduce((acc, num) => acc * num), 1);
}

function luckyNumbers(array) {
  return "Your lucky numbers are: " + array.reduce((acc, val) => acc + ', ' + val) + '.';
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
