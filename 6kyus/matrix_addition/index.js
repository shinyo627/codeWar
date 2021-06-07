// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b) {
  const answer = [];
  //   iterate A array of arrays
  for (let i = 0; i < a.length; i++) {
    let holder = [];
    //     iterate each inner array
    for (let j = 0; j < a[i].length; j++) {
      //       add each number of a, b inner array
      holder.push(a[i][j] + b[i][j]);
      //       Push to answer array of computed arrays once condition is met
      if (holder.length === a[i].length) {
        answer.push(holder);
        holder = [];
      }
    }
  }

  return answer;
}
