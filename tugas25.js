var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function getNumbers(number) {
  return number > 10;
}

var hasil = numbers.filter(getNumbers);

console.log("Sebelumnya : ", numbers);
console.log("Ascending : ", numbers.sort());
console.log("Descending : ", numbers.reverse());
console.log("Filter: ", hasil);
