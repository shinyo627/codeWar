// https://www.codewars.com/kata/53573877d5493b4d6e00050c/solutions/javascript

function capital(capitals) {
  const answer = [];

  //   Iterate the elements of array and format string to assign to answer
  capitals.forEach((nation) => {
    nation['state']
      ? answer.push(`The capital of ${nation['state']} is ${nation['capital']}`)
      : null;

    nation['country']
      ? answer.push(
          `The capital of ${nation['country']} is ${nation['capital']}`
        )
      : null;
  });

  return answer;
}

// ***Clever
function capital(capitals) {
  return capitals.map(
    (c) => `The capital of ${c.state || c.country} is ${c.capital}`
  );
}

let mixed_capitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
];

capital(mixed_capitals)[1];
// "The capital of Spain is Madrid"
