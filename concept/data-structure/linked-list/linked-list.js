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

  shift () {
    if (this.head === null) {
      return undefined
    } else if (this.length === 1) {
      const temp = this.head
      this.head = null
      this.length--
      return temp
    } else {
      const originHead = this.head
      this.head = originHead.next
      originHead.next = null
      this.length--
      return originHead
    }
  }

  unshift (value) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      const temp = this.head
      const newHead = new Node(value)
      this.head = newHead
      newHead.next = temp
    }
    this.length++
  }

  // 自己寫的insertAt
  // insertAt (index, value) {
  //   if (index >= 0 && index < this.length) {
  //     const newNode = new Node(value)
  //     if (index === 0) {
  //       const originHead = this.head
  //       this.head = newNode
  //       newNode.next = originHead
  //     } else {
  //       let currentNode = this.head
  //       for (let i = 1; i < index; i++) {
  //         currentNode = currentNode.next
  //       }
  //       const temp = currentNode.next
  //       currentNode.next = newNode
  //       newNode.next = temp
  //     }
  //     this.length++
  //   } else if (index >= this.length) {
  //     this.push(value)
  //   }
  // }

  // 老師示範的insertAt
  insertAt (index, value) {
    if (index > this.length || index < 0) {
      return null
    } else if (index === 0) {
      this.unshift(value)
      return
    } else if (index === this.length) {
      this.push(value)
      return
    }

    let currentNode = this.head
    const newNode = new Node(value)
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
    this.length++
  }

  removeAt (index) {
    if (index < 0 || index > this.length - 1) {
      return null
    } else if (index === 0) {
      return this.shift()
    } else if (index === this.length - 1) {
      return this.pop()
    }

    let currentNode = this.head
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next
    }
    const temp = currentNode.next
    currentNode.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  get (index) {
    if (index < 0 || index > this.length - 1) {
      return null
    } else {
      let result = this.head
      for (let i = 1; i <= index; i++) {
        result = result.next
      }
      return result.value
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

module.exports = LinkedList
