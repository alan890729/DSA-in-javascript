// const arr = [2, 7, 3, 0, 6, 1, -5, -12, -11]
const arr = [3, -19, 7, 10, 24, 109, 46, -34, -5, 11, 34]
const size = 3

// function maxSum (arr, size) {
//   let result

//   if (size > arr.length) {
//     return null
//   } // 這東西應該叫做edge case, 也就是要記得考慮某些條件下，可能會讓你寫好的邏輯不能執行或執行結果不如預期

//   for (let i = 0; i < arr.length - size + 1; i++) {
//     let sum = 0

//     for (let j = i; j < i + size; j++) {
//       sum += arr[j]
//     }

//     if (typeof result === 'undefined' || sum > result) {
//       result = sum
//     }
//   }

//   return result
// }

function maxSumOptimize (arr, size) {
  // 優化版本，可以發現舊的會一直重複計算，老師提供的優化版本可以避開重複計算的部分

  if (size > arr.length) {
    return null
  }

  let sum = 0
  for (let i = 0; i < size; i++) {
    sum += arr[i]
  }

  let result = sum
  for (let i = size; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - size]
    if (sum > result) {
      result = sum
    }
  }

  return result
}

// function minSum (arr, size) {
//   let result

//   if (size > arr.length) {
//     return null
//   }

//   for (let i = 0; i < arr.length - size + 1; i++) {
//     let sum = 0

//     for (let j = i; j < i + size; j++) {
//       sum += arr[j]
//     }

//     if (typeof result === 'undefined' || sum < result) {
//       result = sum
//     }
//   }

//   return result
// }

function minSumOptimize (arr, size) {
  if (size > arr.length) {
    return null
  }

  let sum = 0
  for (let i = 0; i < size; i++) {
    sum += arr[i]
  }

  let result = sum
  for (let i = size; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - size]
    if (sum < result) {
      result = sum
    }
  }

  return result
}

// console.log(maxSum(arr, size))
// console.log(minSum(arr, size))
console.log(maxSumOptimize(arr, size))
console.log(minSumOptimize(arr, size))
