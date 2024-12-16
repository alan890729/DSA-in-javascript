const LinkedList = require('../linked-list/linked-list')

// 我沒有辦法寫一個只有繼承一部分LinkedList方法的LinkedListStack
// 硬要寫的話會變成以property的方式呈現，但就會很怪
// 所以我只能用prototype
function LinkedListStack () {
  this.head = null
  this.length = 0
}

LinkedListStack.prototype.push = LinkedList.prototype.unshift
LinkedListStack.prototype.pop = LinkedList.prototype.shift
LinkedListStack.prototype.printAll = LinkedList.prototype.printAll

module.exports = LinkedListStack
