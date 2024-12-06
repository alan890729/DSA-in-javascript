const arr = [15, 3, 17, 18, 35, 11, 0, 36, -336, 1054, 1]

function partition (arr, start, end) {
  const pivotElement = arr[end]
  let i = start
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivotElement) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
    }
  }
  arr[end] = arr[i]
  arr[i] = pivotElement
  return i
}

function quickSort (arr, start, end) {
  if (start < end) {
    const pivot = partition(arr, start, end)
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
  }
  return arr
}

console.log(quickSort(arr, 0, arr.length - 1))
