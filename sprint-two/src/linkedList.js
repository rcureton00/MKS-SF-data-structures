var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    }
    if(list.head.next === null){
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    var tempNode = list.head;
    list.head = list.head.next;
    return tempNode.value;
  };

  list.contains = function(target){
    var found = false;
    var traversal = function(node){
      if(node.value === target){
        found = true;
      }
      if(node.next !== null){
        traversal(node.next);
      }
    };
    traversal(list.head);
    return found;
  };

  return list;
};




  var Node = function(value) {
    var node = {};
    node.value = value;
    node.next = null;

    return node;
  };
/*
 * Complexity: What is the time complexity of the above functions?
 */


