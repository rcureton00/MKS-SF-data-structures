

var Graph = function(){
  //create value, edges
  this.storage = [];
};

Graph.prototype.addNode = function(node){
  var current = {};
  current.edges = [];
  current.value = node;
  this.storage.push(current);
};

Graph.prototype.contains = function(target){
  var found = false;
  _.each(this.storage, function(index) {
    if(index.value === target) {
      found = true;
    }
  });
  return found;
};

Graph.prototype.removeNode = function(target){
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === target) {
      delete this.storage[i];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var found = false;
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      for (var j = 0; j < this.storage.length; j++) {
        if(this.storage[j].value === toNode) {
          if(_.contains(this.storage[i].edges, this.storage[j].value) &&
          _.contains(this.storage[j].edges, this.storage[i].value)) {
            found = true;
          }
        }
      }
    }
  }
  return found;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      for (var j = 0; j < this.storage.length; j++) {
        if(this.storage[j].value === toNode) {
          //add Edge
          
          this.storage[i].edges.push(this.storage[j].value);
          this.storage[j].edges.push(this.storage[i].value);
          
        }
      }
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // declare two variables to hold nodes if found
  // no return
    for (var i = 0; i < this.storage.length; i++) {
      if(this.storage[i].value === fromNode) {
        for (var j = 0; j < this.storage.length; j++) {
          if(this.storage[j].value === toNode) {
  
            //add Edge
            delete this.storage[i].edges[_.indexOf(this.storage[i].edges, this.storage[j].value)];
            delete this.storage[j].edges[_.indexOf(this.storage[j].edges, this.storage[i].value)];
          }
        }
      }
  }
  
};

Graph.prototype.forEachNode = function(cb){
  // iterate through nodes and apply cb function
  // no return
  for (var i = 0; i < this.storage.length; i++) {
    console.log(this.storage[i].value);
    cb(this.storage[i].value)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



