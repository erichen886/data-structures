var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.back = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function(){
  if(this.back-this.front >0){
    var firstInLine = this.storage[this.front];
    delete this.storage[this.front]
    this.front++;
    return firstInLine;
  }
};

queueMethods.size = function(){
  return this.back - this.front;
}




