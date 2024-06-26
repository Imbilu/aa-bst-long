const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let currentNode = rootNode;

  if(currentNode === null){
    return;
  }
  let min = currentNode.val;

  while(currentNode.left) {
    currentNode = currentNode.left;
  }

  return currentNode.val;
}

function findMaxBST (rootNode) {
  let current = rootNode;

  if(current.right === null) {
    return;
  }

  while(current.right) {
    current = current.right;
  }

  return current.val;
}

function findMinBT (rootNode) {
  let current = rootNode;

  if(current === null) {
    return Infinity; // Ensures any actual value is less than initial min
  }

  let leftMin = findMinBT(current.left);
  let rightMin = findMinBT(current.right);

  return Math.min(current.val, leftMin, rightMin);
}

function findMaxBT (rootNode) {
  let current = rootNode;

  if(current === null) {
    return -Infinity;
  }

  let leftMax = findMaxBT(current.left);
  let rightMax = findMaxBT(current.right);

  return Math.max(current.val, leftMax, rightMax);
}

function getHeight (rootNode) {
  if(rootNode === null) {
    return -1;
  }

  let leftHeight = 1 + getHeight(rootNode.left);
  let rightHeight = 1 + getHeight(rootNode.right);

  return Math.max(leftHeight, rightHeight);
}

function balancedTree (rootNode) {
  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);

  return Math.abs(left - right) <= 1;
}

function countNodes (rootNode) {
  if(rootNode === null) {
    return 0;
  }

  let left = countNodes(rootNode.left);
  let right = countNodes(rootNode.right);

  return left + right + 1;
}

function getParentNode (rootNode, target, parent=null) {
  // let current = rootNode;

  if(!rootNode) {
    return;
  }

  if(rootNode.val === target) {
    return null;
  }

  if ((rootNode.left && rootNode.left.val === target) || (rootNode.right && rootNode.right.val === target)){
    return rootNode;
  }

  let left = getParentNode(rootNode.left, target);
  if(left) return left;

  return getParentNode(rootNode.right, target);

}

function inOrderPredecessor (rootNode, target) {

  if(!rootNode) {
    return null;
  }

  if(rootNode.val === target && rootNode.left) {
    return findMaxBST(rootNode.left);
  }

  else if(rootNode.val < target) {
    return inOrderPredecessor(rootNode.right, target);
  }

  return inOrderPredecessor(rootNode.left, target);

}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

let bstRoot;

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

findMinBST(bstRoot);




module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
