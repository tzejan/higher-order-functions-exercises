function onlyEven(array) {
  return array.filter( num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(word => word.split(" ").length === 1);
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every( num => num > 0)); //(hint: use Array.prototype.some())
}

function truthyValuesOnly(array) {
  return array.filter(word => word);
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
