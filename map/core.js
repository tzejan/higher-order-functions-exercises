function multiplyBy10(array) {
  return array.map( num => num * 10);
}

function onlyVowels(array) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return array.map(word => word.split("").filter(char => vowels.includes(char)).join(""));
}

function doubleMatrix(array) {
  return array.map(row => row.map(num => num * 2));
}

function onlyNames(array) {
  return array.map(person => person.name);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
