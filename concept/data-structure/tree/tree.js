class Tree {
  constructor () {
    this.root = null
    // this.size = 0
    // this.height = 0
  }

  breadthFirstTraversalTeacherVersion () {
    // 第一次for loop用到這種寫法，就是第一層的length讓他會一直增加，可以學起來
    const result = []
    result.push(this.root)
    for (let i = 0; i < result.length; i++) {
      const currentNode = result[i]
      for (let j = 0; j < currentNode.child.length; j++) {
        result.push(currentNode.child[j])
      }
    }
    return result.map(r => r.value)
  }

  breadthFirstTraversal () {
    const result = []
    bftRecursive(this.root)
    return result

    function bftRecursive (...treeNodes) {
      const temp1 = []
      for (let i = 0; i < treeNodes.length; i++) {
        const currentNode = treeNodes[i]
        result.push(currentNode.value)
        for (let j = 0; j < currentNode.child.length; j++) {
          temp1.push(currentNode.child[j])
        }
      }
      if (temp1.length) {
        bftRecursive(...temp1)
      }
    }
  }

  dftPreOrder () {
    function preOrder (treeNode) {
      let result = []
      result.push(treeNode.value)
      for (let i = 0; i < treeNode.child.length; i++) {
        result = result.concat(preOrder(treeNode.child[i]))
      }
      return result
    }
    return preOrder(this.root)
  }

  dftInOrder () {
    function inOrder (treeNode) {
      if (!treeNode.child.length) {
        return treeNode.value
      }
      let result = []
      for (let i = 0; i < treeNode.child.length; i++) {
        result = result.concat(inOrder(treeNode.child[i]))
        if (i === 0) {
          result.push(treeNode.value)
        }
      }

      return result
    }
    return inOrder(this.root)
  }

  dftPostOrder () {
    function postOrder (treeNode) {
      if (!treeNode.child.length) {
        return treeNode.value
      } else {
        let result = []
        for (let i = 0; i < treeNode.child.length; i++) {
          result = result.concat(postOrder(treeNode.child[i]))
        }
        result.push(treeNode.value)
        return result
      }
    }
    return postOrder(this.root)
  }
}

module.exports = Tree
