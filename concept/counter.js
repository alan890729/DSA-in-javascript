const arr1 = [1, 2, 3, 7, 9, 19, 25, 8]
const arr2 = [19, 5, 16, 10, 8, 1, 3]

function findIntersection (arr1, arr2) {
  // 如果要在更嚴謹，要去檢查arr1, arr2中有沒有自己有重複的element

  const result = []
  const arr = arr1.concat(arr2)
  const counter = {}

  for (let i = 0; i < arr.length; i++) {
    if (!counter[arr[i]]) {
      counter[arr[i]] = 1
    } else {
      counter[arr[i]] += 1
    }
  }

  console.log(counter)

  Object.keys(counter).forEach(key => {
    if (counter[key] > 1) result.push(Number(key))
  })

  return result
}

console.log(findIntersection(arr1, arr2))
