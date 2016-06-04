var BinarySearchTree = function(val){
  var obj = Object.create(methods);
  var alphaNode = null;
  return obj;
};

var methods = {};

methods.insert = function (val) {
  // save new node to variable.
  if (this.alphaNode === null) {
    this.alphaNode = Node(val);
  } else {
    var newNode = Node(val);
    var compareNode = this.alphaNode;
    // evaluate if new node < or > node.
    var traversal = function(item) {
      if (item < compareNode) {
        if (compareNode.left) {
          compareNode = compareNode.left;
          traversal(newNode);
        } else {
          compareNode.left = item; 
        }
      } else if (item > compareNode) {
        if (compareNode.right) {
          compareNode = compareNode.right;
          traversal(newNode);
        } else {
          compareNode.right = item; 
        }   
      }
    };

    traversal(newNode);
      // If less move to node to left. If more move to node to right.
        // if next node != new node is next node. 
           // connect new node to previous node. 
  }
};

methods.contains = function () {

};

methods.depthFirstLog = function () {

};


var Node = function(val) {
  var node = {};
  node.value = val;
  node.left = null;
  node.right = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
