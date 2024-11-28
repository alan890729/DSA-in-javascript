function rs (n) {
  if (n < 1 || !Number.isInteger(n)) {
    return new Error('n must be a positive integer!')
  }

  if (n === 1) {
    return 10
  } else {
    return rs(n - 1) + 15
  }
}

console.log(rs(1))
