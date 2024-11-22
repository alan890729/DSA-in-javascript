function isSubsequence (str1, str2) {
  if (str1.length === 0) return true

  let str1Index = 0
  let str2Index = 0

  while (str2Index < str2.length && str1Index < str1.length) {
    if (str1[str1Index] !== str2[str2Index]) {
      str2Index++
    } else if (str1[str1Index] === str2[str2Index]) {
      str1Index++
      str2Index++
    }
  }

  return str1Index === str1.length
}

console.log(isSubsequence('hello', 'hello dear')) // should be true
console.log(isSubsequence('book', 'brooklyn')) // should be true
console.log(isSubsequence('abc', 'bac')) // should be false, order matters
console.log(isSubsequence('pan', 'application'))
