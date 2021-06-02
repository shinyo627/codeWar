/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
You are given array of integers, your task will be to count all pairs in that array and return their count.
Notes:
Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

// *** MY answer
function duplicates(array) {
  if (array.length === 0 || array.length === 1) return 0;
  // Find the duplicates firstly and assign it in a object
  const container = {};
  array.forEach((number) => {
    if (container[number]) {
      container[number] += 1;
      return;
    }
    container[number] = 1;
  });

  console.log(container);
  // assign number of pairs after deviding each value by 2
  let numOfPairs = 0;

  for (key in container) {
    if (container[key] > 1) {
      container[key] = Math.floor(container[key] / 2);
      numOfPairs += container[key];
    }
  }

  return numOfPairs;
}

// *** Yan's answer
// using the index of another array to keep track of the pairs
function duplicates() {
  // create another array 'double'
  const double = [];
  // create another variable pairs = 0
  let pairs = 0;
  // iterate over ar
  ar.forEach(function (num) {
    // for every number we check is number in double at the same index as the number
    if (double[num] !== num) {
      // if not -> we put the number at this index into double
      double[num] = num;
    } else {
      // if yes -> we set the value of this index to undefined
      double[num] = undefined;
      // and increment pairs
      pairs++;
    }
  });
  return pairs;
}

// ***Clever
// function duplicates(array) {
//   let res = 0, odd = new Set();
//   for (let x of array) {
//     if (odd.delete(x))
//       res++;
//     else
//       odd.add(x);
//   }
//   return res;
// }

duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2, 2, 2, 2]); // 4
