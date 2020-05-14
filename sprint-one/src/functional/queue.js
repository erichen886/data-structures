var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if(back-front > 0){
      var firstInLane = storage[front];
      delete firstInLane;
      front++;
      return firstInLane;
    }
  };

  someInstance.size = function() {
    return back-front;
  };

  someInstance.stor = function() {
    console.log(storage);
  };

  return someInstance;
};
