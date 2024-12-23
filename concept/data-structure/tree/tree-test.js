const Tree = require('./tree')
const TreeNode = require('./tree-node')

const myTree = new Tree()
const rootNode = new TreeNode(2)
const treeNode1 = new TreeNode(7)
const treeNode2 = new TreeNode(5)
const treeNode3 = new TreeNode(2)
const treeNode4 = new TreeNode(10)
const treeNode5 = new TreeNode(6)
const treeNode6 = new TreeNode(9)
const treeNode7 = new TreeNode(5)
const treeNode8 = new TreeNode(11)
const treeNode9 = new TreeNode(4)

// 下面是在建構wilson老師影片中的tree，我想用這個tree做練習
myTree.root = rootNode
rootNode.appendChild(treeNode1, treeNode2)
treeNode1.appendChild(treeNode3, treeNode4, treeNode5)
treeNode2.appendChild(treeNode6)
treeNode5.appendChild(treeNode7, treeNode8)
treeNode6.appendChild(treeNode9)

// console.log(myTree)
// console.log(myTree.root)
// console.log(myTree.root.child[0])
// console.log(myTree.root.child[1])
// console.log(myTree.root.child[0].child[2])
// console.log(myTree.root.child[1].child[0])

console.log(myTree.breadthFirstTraversal())
console.log(myTree.breadthFirstTraversalTeacherVersion())
