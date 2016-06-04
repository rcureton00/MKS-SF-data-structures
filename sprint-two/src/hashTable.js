var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // creaket a bucket
  var bucket = this._storage.get(i); 

  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }
  // create a tuple to hold k & v.
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;

   // place tuple into bucket at index.
   bucket.push(tuple);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(i);
  // look through each bucket.
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  } 
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(i);
  // look through each bucket.
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
