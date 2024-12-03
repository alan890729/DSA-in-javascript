const arr = [15, 3, 17, 18, 35, 11, 0, 36, -336, 1054, 1]

function merge (leftArr, rightArr) {
  const result = []
  let l = 0
  let r = 0

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) {
      result.push(leftArr[l])
      l++
    } else {
      result.push(rightArr[r])
      r++
    }
  }

  if (l < leftArr.length) {
    for (let i = l; i < leftArr.length; i++) {
      result.push(leftArr[i])
    }
  }
  if (r < rightArr.length) {
    for (let i = r; i < rightArr.length; i++) {
      result.push(rightArr[i])
    }
  }

  return result
}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  } else {
    const middle = Math.ceil(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
  }
}

console.log(mergeSort(arr))
