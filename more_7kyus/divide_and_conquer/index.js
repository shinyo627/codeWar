/*
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
Given a mixed array of number and string representations of integers, add up the string integers
and subtract this from the total of the non-string integers.
*/

// function divCon(x){
// //   assing numer and string number individually
// let totalOfNum = 0
// let totalOfString = 0

//   for(let i = 0; i < x.length; i++) {
//     if (typeof x[i] === 'string') {
//       totalOfString += Number(x[i])
//     }

//     if(typeof x[i] === 'number') {
//       totalOfNum += x[i]
//     }
//   }

//   return totalOfNum - totalOfString
// }

function divCon(x) {
  let totalOfNum = 0;

  x.forEach((num) => {
    typeof num === 'number' ? (totalOfNum += num) : (totalOfNum -= Number(num));
  });

  return totalOfNum;
}

// divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])
// 14
