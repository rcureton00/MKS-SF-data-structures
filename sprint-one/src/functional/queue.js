var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size === 0) {
      return null;
    }
    
    var result = storage[0];

    for (var i = 1; i < size; i++) {
      storage[i - 1] = storage[i];
    }
    size--;
    delete storage[size];
    return result;
  }

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
