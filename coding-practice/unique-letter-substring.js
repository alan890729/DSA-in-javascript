const str = 'Thisishowwedoit'
// const str = 'wannaplaysomeapex'
// const str = ''

function uniqueLetterSubstring (str) {
  const counter = {}
  let left = 0
  let right = 0
  let maxLength = -Infinity

  while (right < str.length) {
    if (!counter[str[right]]) {
      // counter[str[right]]是0或是undefined都會進來這
      counter[str[right]] = 1

      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1
      }

      right++
    } else {
      counter[str[left]]--
      left++
    }
  }

  if (maxLength === -Infinity) {
    return null
  }
  return maxLength
}

console.log(uniqueLetterSubstring(str))
