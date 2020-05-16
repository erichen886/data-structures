var Tree = function(value) {
  var newTree = {};
  newTree.value = value; //  {value:value, children:{} ==>  { value: value, children: [{value: value, children: }]}

  // your code here
  newTree.children = [];  //  newTree.children[0].children ==> {value: value, children: {}}
  _.extend(newTree, treeMethods);

  return newTree; // <== this
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a children object
  //insert value and children key.
  //return.

  var child = Tree(value);
  this.children.push(child);
  return child; //newTree.children[0].children.addchild(1);

};

treeMethods.contains = function(target, tree) {
  //initiate result and tree
  var result = false;
  var tree = tree || this;
  //check the current tree
  if(tree.value === target){
    result = true;
  }
  if(tree.children.length > 0){
  //iterate over instance of new tree object
  for(var i =0 ;i < tree.children.length; i++){
    //check if value is equal to target
    var childResult = tree.contains(target, tree.children[i]);
    result = (result || childResult);
    }
  }

  return result;
};

// var tree = Tree(9) ==> {value: und , children []}
//.addChild(9) ===>
// {value:undefined, children:{} ==>  { value: 4, children: [{value: 5, children:[] }]}

// //making a child constructor
// var Child= function(value) {
//   var child = {};
//   child.value = value;
//   child.children = [];
//   _.extend(child, treeMethods);

//   return child;
// }



/*
 * Complexity: What is the time complexity of the above functions?
 */

