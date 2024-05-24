// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      if(this.root === null) {
        this.root = new TreeNode(val);
        return this.root;
      }

      if(currentNode === null) {
        currentNode = new TreeNode(val);
        return currentNode;
      }

      if(val < currentNode.val) {
        if(currentNode.left === null) {
          currentNode.left = new TreeNode(val);
        }
        else {
          this.insert(val, currentNode.left);
        }
      }

      if(val > currentNode.val) {
        if(currentNode.right === null) {
          currentNode.right = new TreeNode(val);
        }
        else {
          this.insert(val, currentNode.right);
        }
      }


    }

    search(val, current=this.root) {
      if(current === null) {
        return false;
      }

      if(val === current.val) {
        return true;
      }

      else if(val < current.val) {
        return this.search(val, current.left);
      }

      else if(val > current.val){
        return this.search(val, current.right);
      }

      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      if(currentNode === null) {
        return;
      }
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
      if(currentNode === null){
        return;
      }

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      if(currentNode === null) {
        return;
      }

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let q = [this.root];

      while(q.length !== 0) {
        let current = q.shift();
        if(current)
        {
          console.log(current.val);
          q.push(current.left);
          q.push(current.right);
      }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let s = [this.root];

      while(s.length !== 0) {
        let current = s.pop();
        console.log(current.val);

        if(current.left) {
          s.push(current.left);
        }

        if(current.right) {
          s.push(current.right);
        }
      }
  }
  }


//   let bst = new BinarySearchTree();

//   bst.insert(4);
//   bst.insert(2);
//   bst.insert(6);
//   bst.insert(1);
//   bst.insert(3);
//   bst.insert(5);
//   bst.insert(7);

  module.exports = { BinarySearchTree, TreeNode };


// Your code here
