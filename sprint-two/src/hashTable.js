var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // { storage=[]}
};
//should be able to store more than one value
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // cases for no array in main limitedArray
  if (this._storage.get(index) === undefined) {
    // create an array
    var inner = [];    // [Bob, Lob]
    // create an array of [k,v]
    var val = [k, v];
    // put [k,v] in to the top array
    inner.push(val);
    //set top array into the hashtable Limited table
    this._storage.set(index, inner); // [[B,B], [B, B]]

  } else {
    //this._storage.get(index)  storage = this
    var inner = this._storage.get(index);
    for (var i = 0; i < inner.length; i++) {
      if (inner[i][0] === k) {
        inner[i][1] = v;
      }else if (i === inner.length-1 && inner[i][0] !== k) {
        inner.push([k,v]);
        break;
      }

    }
    this._storage.set(index, inner);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get array in index
  var inner = this._storage.get(index);
  //iterate through the index to find the right key inside the [k,v]
  for (var i = 0; i < inner.length; i++ ) {
    //when key = k
    if (inner[i][0] === k) {
      //return the value
      return inner[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var inner = this._storage.get(index);
  //iterate through the index to find the right key inside the [k,v]
  for (var i = 0; i < inner.length; i++) {
    //when key = k
    if (inner[i][0] === k) {
      inner.splice(i, 1);
    }
  }
  this._storage.set(index, inner);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


