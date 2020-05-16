var BinarySearchTree = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
};

//method, which accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.insert = function (value, tree) {
  //create a new tree
  // var newNode = new BinarySearchTree (value, position);
  //if the input value is smaller than current value
  var newNode = new BinarySearchTree (value);
  var tree = tree || this;
  if (tree.value <= value) {
    if(tree.right.value !== undefined){
      BinarySearchTree.prototype.insert(value,tree.right);
    }else{
      tree.right = newNode;
    }
  }else{
    if(tree.left.value !== undefined){
      BinarySearchTree.prototype.insert(value, tree.left);
    }else{
      tree.left = newNode;
    }
  }
};
//method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function (value, tree) {
  var result = false;
  var tree = tree || this;
  if(value === tree.value){
    result = true;
  }else if(value >= tree.value){
    if(tree.right.value !== undefined){
      var rightResult = BinarySearchTree.prototype.contains(value,tree.right);
      result = rightResult || result;
    }
  }else{
    if(tree.left.value !== undefined){
      var leftResult = BinarySearchTree.prototype.contains(value,tree.left);
      result = leftResult || result;
    }
  }
  return result;
};
//method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function (cb, tree) {
  var count = 0
  var tree = tree || this;
  var currentValue = tree.value;
  console.log(currentValue);
  cb(currentValue);

  if(tree.left.value !== undefined){
    BinarySearchTree.prototype.depthFirstLog(cb, tree.left);
  }
  if(tree.right.value !== undefined){
    BinarySearchTree.prototype.depthFirstLog(cb, tree.right);
  };

};
/*
 * Complexity: What is the time complexity of the above functions?
 */


 //var binaryTree = new BinarySearchTree ();

 /// { currentVal: [leftVal, rightVal]}