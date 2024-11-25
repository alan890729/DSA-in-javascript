const arr = [9, 8, 1, 4, 9, 5, 1, 2]
// const arr = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12]
// const arr = [100, 1, 1, 2, 100]
const sum = 11
// const sum = 60
// const sum = 102

// 以下是我嘗試自己寫的，也對但是不是很精簡
// function minSubArrayLength (arr, sum) {
//   if (sum < 1 || !Number.isInteger(sum)) {
//     // 題目條件有一個是第二個parameter要是正整數
//     return new Error('parameter 2 should be a positive integer!')
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 1 || !Number.isInteger(arr[i])) {
//       // 題目條件 第一個parameter裡的所有數字都要是正整數
//       return new Error('Numbers in the arr provided at parameter 1 should be positive integers!')
//     }
//   }

//   let minLength = Infinity
//   let left = 0
//   let right = 0
//   let currentSum = 0

//   while (right < arr.length) {
//     while (currentSum < sum) {
//       if (right >= arr.length) {
//         if (minLength === Infinity) {
//           return 0
//         } else {
//           return minLength
//         }
//       }

//       currentSum += arr[right]

//       if (currentSum < sum) {
//         right++
//       }
//     }

//     while (currentSum >= sum) {
//       left++
//       currentSum -= arr[left - 1]
//     }

//     if (right - left + 2 < minLength) {
//       minLength = right - left + 2
//     }
//     right++
//   }
//   return minLength
// }

function minSubArrayLength (arr, sum) {
  let minLength = Infinity
  let left = 0
  let right = 0
  let currentSum = 0

  while (right < arr.length) {
    currentSum += arr[right]

    while (currentSum >= sum) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1
      }
      currentSum -= arr[left]
      left++
    }

    right++
  }

  if (minLength === Infinity) {
    return 0
  } else {
    return minLength
  }
}

console.log(minSubArrayLength(arr, sum))
