function sameFrequency (str1, str2) {
  if (str1.length !== str2.length) return false

  const counterStr1 = {}
  const counterStr2 = {}

  for (let i = 0; i < str1.length; i++) {
    if (!counterStr1[str1[i]]) {
      counterStr1[str1[i]] = 1
    } else {
      counterStr1[str1[i]]++
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!counterStr2[str2[i]]) {
      counterStr2[str2[i]] = 1
    } else {
      counterStr2[str2[i]]++
    }
  }

  console.log(counterStr1)
  console.log(counterStr2)

  for (const key in counterStr1) {
    if (!counterStr2[key]) {
      return false
    }
    if (counterStr1[key] !== counterStr2[key]) {
      return false
    }
  }
  return true
}

console.log(sameFrequency('abbc', 'bcab'))
