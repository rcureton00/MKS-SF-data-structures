var Stack = function() {
	this.stackSize = 0;
	this.storage = {};
};

Stack.prototype.push = function (value) {
	this.storage[this.stackSize] = value;
	this.stackSize++;
};

Stack.prototype.pop = function () {
	if (this.stackSize === 0) {
		return null;
	};
	this.stackSize--;
	var result = this.storage[this.stackSize];
	delete this.storage[this.stackSize];
	return result;
};

Stack.prototype.size = function () {
	return this.stackSize;
};