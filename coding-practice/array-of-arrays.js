const arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]]
// const arrs = ['a', ['b', ['c']], 'd']
// const arrs = ['a', ['b'], 'c']

// function collector (arrs) {
//   let result = []

//   for (let i = 0; i < arrs.length; i++) {
//     if (typeof arrs[i] === 'string') {
//       result.push(arrs[i])
//     } else if (Array.isArray(arrs[i])) {
//       result = result.concat(collector(arrs[i]))
//     }
//   }

//   return result
// }

function collector (arrs) {
  function dig (arrs) {
    for (let i = 0; i < arrs.length; i++) {
      const currValue = arrs[i]
      if (Array.isArray(currValue)) {
        dig(currValue)
      } else if (typeof currValue === 'string') {
        result.push(currValue)
      }
    }
  }

  const result = []
  dig(arrs)
  return result
}

console.log(collector(arrs))
