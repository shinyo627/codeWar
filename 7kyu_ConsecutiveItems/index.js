function consecutive(arr, a, b) {
  const str = arr.join(',');

  return str.includes(`${a},${b}`) || str.includes(`${b},${a}`);
}
