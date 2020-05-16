var LinkedList = function() {
  var list = {};
  // should create new head when new linkedList Instance created
  list.head = null;
  // should create new tail when new linkedList Instance created
  list.tail = null;

  list.counter = 0;
  var initiated = false;

  var storage = [];
      // {'head': valuehead, 'tail':valuetail, '0': newnode0,'1': newnode1};


  list.addToTail = function(value) {
    //  create new node instance with value
    var newNode = Node(value);


    //  if this is the first node, put in value in both head and tail.
    // {'head': valuehead, 'tail':valuetail, '0': newnode};
    if (initiated === false) {
      //add this new node to the list.
      list.tail = Node(value);
      list.head = Node(value);
      list[list.counter] = newNode;
      //update counter
      list.counter++;
      initiated = true;
    } else {
          // {'head': valuehead, 'tail':valuetail, '0' : newnode(v0,n0), '1':newnode(v1,n1)};
      //grb the current value in the tail;
      //searh for the node that has the v1
      // Another way to search the last node is to use counter.
      for(var key in list){
        //if you get a hit
        if(list[key].value === list.tail.value){
          //put in the next value inside that object.
          list[key].next = value;
        }
      }
      //change tail to new value
      list.tail.value = value;

      //add new node to the list
      list[list.counter] = newNode;

      //update counter
      list.counter++;
    };
  };

  list.removeHead = function() {
    if(list.head.value !== null){
      // get the address of 2nd node in first node
      for(var key in list){
        //count how many item in the current list object
        //if you get a hit
        if(list[key].value === list.head.value){
          //change head node value;
          var deletedNode = list[key].value;
          list.head.value = list[key].next;
          //delete 1st node
          delete list[key];
          break;
        }
      }
      return deletedNode;
   }
  //  if(count === 3){
  //   list.head.value = null;
  //   list.tail.value = null;
  //  }

  };

  list.contains = function(target) {
    // search the key of the object to see if there ise the target.
    for(var key in list){
      //if you get a hit
      if(list[key].value === target){
        //put in the next value inside that object.
        return true;
      }
    }
    return false;
  };

  //show list function
  list.showList = function(){
    console.log(list);
  }

  return list;
};

var Node = function(value) {
  var node = {}; // {value: value, next: null}

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
