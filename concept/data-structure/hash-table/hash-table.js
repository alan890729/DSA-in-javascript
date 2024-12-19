class HashTable {
  constructor (size) {
    this.size = size
    this.table = []
    for (let i = 0; i < this.size; i++) {
      this.table.push([])
    }
  }

  parse (str) {
    // just one of ways (a simple one) to convert string to integer, ofcourse you can use other parse method
    let result = 0
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i)
    }
    return result % this.size
  }

  hashByDivisionMethod (key) {
    return key % this.size
  }

  hashByMultiplicationMethod (key) {
    let parsedKey
    if (typeof key === 'number') {
      parsedKey = key
    } else {
      parsedKey = this.parse(key)
    }
    const a = (Math.sqrt(5) - 1) / 2
    return Math.floor(this.size * ((parsedKey * a) % 1))
  }

  set (key, value) {
    const index = this.hashByMultiplicationMethod(key)
    this.table[index].push({ key, value })
  }

  get (key) {
    const index = this.hashByMultiplicationMethod(key)
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i].value
      }
    }
    return undefined
  }

  printAll () {
    console.log(this.table)
  }
}

module.exports = HashTable
