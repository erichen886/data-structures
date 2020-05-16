

// Instantiate a new graph
var Graph = function() {
  this.keyNum = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[this.keyNum] = {value: node, connections:[]};
  this.keyNum++;
  // //possibly add connect property then using edge??
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var key in this){
    if(this[key].value === node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this ) {
    if (this[key].value === node);{
      delete this[key];
      break;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeConnected = false, toNodeConnected=false;
  for (var key in this) {
    if (this[key].value === undefined) {
      continue;
    }
      if (this[key].value === fromNode) {
        if(this[key].connections.includes(toNode)) {
          var fromNodeConnected = true;
        }
      }
      if (this[key].value === toNode);{
        if(this[key].connections.includes(fromNode)){
          var toNodeConnected = true;
        }
      }
  }
  return fromNodeConnected && toNodeConnected;
};
//

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  //value  to value of other node
    //how to keep track perhaps have a connection property type and increment that
    for(var key in this) {
      if (this[key].value === undefined) {
        continue;
      }
        if (this[key].value === fromNode) {
            this[key]['connections'].push (toNode); // { value: connections: 0: 1: con: toNode}
        };
    };

    for (var key in this) {
        if (this[key].value === toNode) {
            this[key]['connections'].push (fromNode); // {value: c1: c2: con:fromNode}
        };
    };
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this) {
    if (this[key].value === undefined) {
      continue;
    }
    if (this[key].value === fromNode) {
        var index =this[key].connections.indexOf(toNode);
        this[key].connections.splice(index,1);
    };
    if(this[key].value === toNode){
      var index =this[key].connections.indexOf(fromNode);
      this[key].connections.splice(index,1);
    };
  };
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this[key].connections === undefined) {
      continue;
    }
    cb(this[key].value);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//create Node object: holds value and 2 connections.
// var Node = function(value){
//   this.value = value;
//   this.connectOne = null;
//   this.connectTwo = null;
// };
