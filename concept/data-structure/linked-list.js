class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  push (value) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    this.length++
  }

  pop () {
    if (this.head === null) {
      return undefined
    } else if (this.length === 1) {
      const currentNode = this.head
      this.head = null
      this.length--
      return currentNode
    } else {
      let currentNode = this.head
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next
      }
      const poppedNode = currentNode.next
      currentNode.next = null
      this.length--
      return poppedNode
    }
  }

  printAll () {
    let currentNode = this.head
    if (currentNode === null) {
      console.log('no node in this linked list yet.')
      return
    }

    while (currentNode !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}

const myLinkedList = new LinkedList()
myLinkedList.push('Alan')
myLinkedList.push('Gura')
myLinkedList.push('Kroni')
myLinkedList.push('test')
myLinkedList.printAll()
console.log(myLinkedList.length)

Array.from({ length: myLinkedList.length }).forEach(_ => {
  console.log('pop a element from myLindedList, the element:', myLinkedList.pop())
})
myLinkedList.printAll()
console.log(myLinkedList.length)
