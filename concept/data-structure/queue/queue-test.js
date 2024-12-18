const LinkedListQueue = require('./queue')
const myQueue = new LinkedListQueue()
myQueue.enqueue('Gura')
myQueue.enqueue('Ina')
myQueue.enqueue('Amelia')
myQueue.enqueue('Bijou')
console.log('dequeue a element from myQueue, the element:', myQueue.dequeue())
console.log('dequeue a element from myQueue, the element:', myQueue.dequeue())
console.log('dequeue a element from myQueue, the element:', myQueue.dequeue())
myQueue.printAll()
console.log(myQueue.length)
