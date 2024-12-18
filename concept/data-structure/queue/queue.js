class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedListQueue {
  constructor () {
    this.head = null
    this.last = null
    this.length = 0
  }

  enqueue (value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.last = newNode
    } else {
      // 這邊有用到call by reference，要想一下，腦袋打結
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
  }

  dequeue () {
    if (this.length === 0) {
      return null
    }

    const result = this.head.value
    if (this.length === 1) {
      this.last = null
    }
    this.head = this.head.next
    this.length--
    return result
  }

  printAll () {
    if (this.length === 0) {
      console.log('there\'s no node in this queue.')
    }
    let currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}

module.exports = LinkedListQueue
