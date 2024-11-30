// const arr = [4, 6, 8, 11, 2, 1]

const length = 30
const arr = Array.from({ length }).map(_ => Math.floor(Math.random() * length))

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    while (arr[j] > arr[j + 1] && j >= 0) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      j--
    }
  }

  return arr
}

console.log(insertionSort(arr))
