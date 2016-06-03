var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // extend newTree with treeMethods.
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var found = false;
  var traversal = function(node) {
  	_.each(node, function(current) {
  	  if (current.value === target) {
  	  	found = true;
  	  }
  	  if (current.children) {
  	  	traversal(current.children);
  	  }
  	});
  };
  traversal(this.children);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
