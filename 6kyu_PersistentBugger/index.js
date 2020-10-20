function persistence(num) {
  for (let i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((a, c) => a * c);
  }
  return i;
}
