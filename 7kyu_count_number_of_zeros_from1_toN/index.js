// https://www.codewars.com/kata/557cffec8c3e8e55cc00010f
// Create an algorithm to count the number of zeros that appear between 1 and N.
// Examples:
// There are 2 zeros from 1 to 20: 10, 20
// There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
// countZeros(10); // returns 1
// countZeros(100); // returns 11
// countZeros(200); // returns 31
// */

function countZeros(n) {
  const numberWithZeros = [];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const stringNum = i.toString();
    if (stringNum.includes('0')) {
      numberWithZeros.push(stringNum);
    }
  }
  console.log(numberWithZeros);

  const joinedNumArr = numberWithZeros.join('').split('');

  joinedNumArr.forEach((n) => {
    if (n === '0') {
      count++;
    }
  });

  return count;
}

countZeros(1000);

// ***Others answer
// const countZeros = n => {
//     // concatenate all the numbers to a string
//     let str = ''
//     for (let i = 9; i <= n; i++) {
//         str += i.toString();
//     }
//     // return the number of 0s in that string
//     return str.split('0').length - 1;
// }
