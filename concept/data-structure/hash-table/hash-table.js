class HashTable {
  constructor (size) {
    this.size = size
    this.table = []
    for (let i = 0; i < this.size; i++) {
      this.table.push([])
    }
  }

  hashByDivisionMethod (key) {
    return key % this.size
  }

  hashByMultiplicationMethod (key) {
    const a = (Math.sqrt(5) - 1) / 2
    return Math.floor(this.size * ((key * a) % 1))
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
