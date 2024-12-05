// const arr = [4, 1, 6, 10, 11, 3, 2, 14, 5, 13, 9, 7, 8, 12, 15]
const arr = [15, 3, 17, -17, 18, 20, 2, 1, 666]
let heapSize = arr.length - 1

function buildMaxHeap () {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapify(i)
  }
}

function swap (arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function maxHeapify (i) {
  const l = 2 * i + 1
  const r = 2 * i + 2
  let largest

  if (l <= heapSize && arr[i] < arr[l]) {
    largest = l
  } else {
    largest = i
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }

  if (i !== largest) {
    swap(arr, i, largest)
    maxHeapify(largest)
  }
}

function heapSort () {
  buildMaxHeap()
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, i, 0)
    heapSize--
    maxHeapify(0)
  }

  return arr
}

console.log(heapSort())
