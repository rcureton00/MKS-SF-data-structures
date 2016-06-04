var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //takes string & adds to set (unless already present)
  //no return
  var node = {};
  node.value = item;
  this.storage.push(node);
};

setPrototype.contains = function(item){
  //takes string, checks if in set
  //returns boolean
  var flag = false;
  _.each(this.storage, function(current) {
    if (current.value === item) {
      flag = true;
    }
  });
  return flag;
};

setPrototype.remove = function(item){
  //takes string, removes from set (if present)
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === item) {
      delete this.storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// 