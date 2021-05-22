/*
https://www.codewars.com/kata/5412509bd436bd33920011bc/
Usually when you buy something, you're asked whether your credit card number, phone number or answer 
to your most secret question is still correct. However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

// *** My answer ***
// return masked string
function maskify(cc) {
  if (cc.length <= 1 || cc === '') {
    return cc;
  }

  let hashed = '';

  //   Add hash to the number of letters inside cc til last 4 elements
  for (let i = 0; i < cc.length - 4; i++) {
    hashed += '#';
  }

  return hashed + cc.slice(-4);
}

function maskify(cc) {
  if (cc.length < 5) return cc;
  return '#'.repeat(cc.length - 4) + cc.slice(-4);
}

function maskify(cc) {
  if (cc.length < 5) return cc;
  return (
    cc
      .slice(0, cc.length - 4)
      .split('')
      .map(function (num) {
        return '#';
      })
      .join('') + cc.slice(cc.length - 4)
  );
}
