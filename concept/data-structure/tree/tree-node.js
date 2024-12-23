class TreeNode {
  constructor (value) {
    this.value = value
    this.child = []
  }

  #isTreeNode (node) {
    return node instanceof TreeNode
  }

  appendChild (...value) {
    value.forEach(v => {
      const treeNode = this.#isTreeNode(v) ? v : new TreeNode(v)
      this.child.push(treeNode)
    })
  }
}

module.exports = TreeNode
