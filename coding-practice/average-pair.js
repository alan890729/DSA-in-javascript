// const arr = [-11, 0, 1, 2, 3, 4, 5, 6, 9, 14, 17, 18, 21]
// const avg = 4

// function averagePair (sortedIntArr, avg) {
//   // 情況也設定這個sortedIntArr沒有重複的東西
//   // 然後因為整數兩個數字的平均如果有小數，只會是.5的形式，所以暫時不用考慮浮點運算
//   // 雖然題目沒有限制avg只能是整數和.5的形式，但avg請先設為整數或是.5的形式，例如avg = 2.5，不要是像avg = 1.3
//   // 要也是可以，但就是所有的四則運算都要去用decimal.js去精算
//   const result = []
//   const counter = {}
//   const total = avg * 2

//   for (let i = 0; i < sortedIntArr.length; i++) {
//     counter[sortedIntArr[i]] = total - sortedIntArr[i]
//   }
//   console.log('counter:', counter)

//   for (const key in counter) {
//     if (counter[counter[key]] === Number(key) && counter[key] !== Number(key)) {
//       result.push([Number(key), counter[key]])
//       counter[counter[key]] = null
//     }
//   }

//   return result
// }

// console.log(averagePair(arr, avg))

// Teacher version
// use two pointer
const arr = [-11, 0, 1, 2, 3, 4, 5, 6, 9, 14, 17, 18, 21]
const avg = 3

function averagePair (sortedIntArr, avg) {
  let left = 0
  let right = sortedIntArr.length - 1
  const result = []

  while (left < right) {
    const currentAvg = (sortedIntArr[left] + sortedIntArr[right]) / 2
    if (currentAvg < avg) {
      left++
    } else if (currentAvg > avg) {
      right--
    } else if (currentAvg === avg) {
      result.push([sortedIntArr[left], sortedIntArr[right]])
      left++
      right--
    }
  }

  return result
}

console.log(averagePair(arr, avg))
