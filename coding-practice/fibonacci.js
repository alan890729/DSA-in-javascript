const n = 5

function f (n) {
  console.log(`f(${n})`)
  if (n !== 0 && !Number.isInteger(n)) {
    return new Error('n must be a positive integer or 0!')
  }

  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return f(n - 1) + f(n - 2)
  }
}

console.log(f(n))
