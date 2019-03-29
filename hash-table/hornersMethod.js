let arr_len = 20;

function hash(key) {
  // Prime number to use with Horner's method
  const H_PRIME = 31;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  return numKey % arr_len;
}
