const HashTable = require('./hash-table')
const myHashTable = new HashTable(6)

myHashTable.set(11424, 'Mike')
myHashTable.set(6254, 'James')
myHashTable.set(4171, 'Drake')
myHashTable.set(554, 'Kevin')
myHashTable.set('white', '#FFFFFF')
myHashTable.set('lightblue', '#ADD8E6')

const key1 = 554
const key2 = 1000
const key3 = 'lightblue'
console.log(`myHashTable get the value that key is ${key1} for me:`, myHashTable.get(key1))
console.log(`myHashTable get the value that key is ${key2} for me:`, myHashTable.get(key2))
console.log(`myHashTable get the value that key is ${key3} for me:`, myHashTable.get(key3))

myHashTable.printAll()
