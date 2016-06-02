var Queue = function() {
  var object = Object.create(queueMethods);
  object.queueSize = 0;
  object.storage = {};
  return object;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.storage[this.queueSize] = value;
	this.queueSize++;
};

queueMethods.dequeue = function () {
	if (this.queueSize === 0) {
		return null;
	};
	var result = this.storage[0];
	for (var i = 1; i < this.queueSize; i++) {
		this.storage[i - 1] = this.storage[i];
	};
	this.queueSize--;
	delete this.storage[this.queueSize];
	return result;
};

queueMethods.size = function () {
	return this.queueSize;
};
