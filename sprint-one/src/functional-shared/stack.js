var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.Storage = {};
  newStack.counter = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.Storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  if(this.counter > 0){
    this.counter--;
    var lastItem = this.Storage[this.counter];
    delete this.Storage[this.counter];
    return lastItem;
  }
};

stackMethods.size = function(){
  return this.counter;
};

// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var newStack = {};
//   newStack.Storage = {};
//   newStack.counter = 0;
//   _.extend(newStack, Stack.stackMethods);

//   return newStack;
// };

// console.log(Object.keys(Stack));
// Stack.stackMethods = {};

// Stack.stackMethods.push = function(value){
//   this.Storage[this.counter] = value;
//   this.counter++;
// };

// Stack.stackMethods.pop = function(){
//   if(this.counter > 0){
//     this.counter--;
//     var lastItem = this.Storage[this.counter];
//     delete this.Storage[this.counter];
//     return lastItem;
//   }
// };

// Stack.stackMethods.size = function(){
//   return this.counter;
// };
