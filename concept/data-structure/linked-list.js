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
myLinkedList.printAll()
console.log(myLinkedList.length)
