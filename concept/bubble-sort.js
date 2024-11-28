// const arr = [4, 1, 7, 2, 5, 3, 99, 23, 34, 5, 12, 77]
// const length = 100
// const arr = Array.from({ length }).map(_ => {
//   return Math.floor(Math.random() * length)
// })
const arr = [1, 2, 3, 0, 4, 5]

function bubbleSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapping = false
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        if (!swapping) {
          swapping = true
        }
      }
    }

    if (!swapping) {
      break
    }
  }
  return arr
}

console.log(bubbleSort(arr))
