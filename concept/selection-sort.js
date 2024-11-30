// const arr = [4, 1, 7, 8, 2, 5]
const arr = [14, -4, 17, 6, 22, 1, -5]

function selectionSort (arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }

  return arr
}

console.log(selectionSort(arr))
