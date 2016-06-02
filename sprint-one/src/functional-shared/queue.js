var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var container = {};
  container.queueSize = 0;
  container.storage = {};
  _.extend(container, queueMethods);
  return container;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.queueSize] = value;
	this.queueSize++;
};

queueMethods.dequeue = function() {
	if (this.queueSize === 0) {
		return null;
	}
	var result = this.storage[0];
	for (var i = 1; i < this.queueSize; i++) {
		this.storage[i - 1] = this.storage[i]; 
	}
	this.queueSize--;
	delete this.storage[this.queueSize];
	return result;
};

queueMethods.size = function() {
	return this.queueSize;
};
