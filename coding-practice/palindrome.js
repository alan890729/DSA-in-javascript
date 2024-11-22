// pointer, 或是說two pointer的應用
const str = 'negus'

function isPalindrome (str) {
  const arr = str.split('')
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] === arr[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
}

console.log(isPalindrome(str))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('asdfsafeaw'))
