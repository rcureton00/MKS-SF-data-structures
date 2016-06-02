var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  object.stackSize = 0;
  object.storage = {};
  return object;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.stackSize] = value;
	this.stackSize++;
};

stackMethods.pop = function() {
	if (this.stackSize === 0) {
		return null;
	}

    this.stackSize--;
	var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
	return result;
};

stackMethods.size = function() {
	return this.stackSize;
};