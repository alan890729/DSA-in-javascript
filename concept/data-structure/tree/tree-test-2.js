const Tree = require('./tree')
const TreeNode = require('./tree-node')

const myTree = new Tree()
const rootNode = new TreeNode(10)

myTree.root = rootNode
rootNode.appendChild(9, 7)
rootNode.child[0].appendChild(8, 5, 11)
rootNode.child[0].child[0].appendChild(6)
rootNode.child[1].appendChild(1, 3)
rootNode.child[1].child[0].appendChild(4, 2)

console.log('breadth first traversal:', myTree.breadthFirstTraversalTeacherVersion())
console.log('depth first traversal pre order:', myTree.dftPreOrder())
console.log('depth first traversal in order:', myTree.dftInOrder())
console.log('depth first traversal post order:', myTree.dftPostOrder())
