var Stack = function() {
	var someInstance = {};
	var storage = {};
	var size = 0;
	_.extend(someInstance, stackMethods);
	return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

	var stackMethods = {};

	stackMethods.push = function(value) {
		this.storage[this.size] = value;
		this.size++;
	};

	stackMethods.pop = function() {
		if(this.size === 0) {
			return null;
		}
		this.size--;
		var tempResult = this.storage[this.size];
		delete this.storage[this.size];
		return tempResult;
	};

	stackMethods.size = function() {
		return this.size;
	};

// var stackMethods = {
// 	push : function(value) {
// 		this.storage[this.size] = value;
// 		this.size++;
// 	},
// 	pop : function() {
// 		if(this.size === 0) {
// 			return null;
// 		}
// 		this.size--;
// 		var tempResult = this.storage[this.size];
// 		delete this.storage[this.size];
// 		return tempResult;
// 	},
// 	size : function() {
// 		return this.size;
// 	}
// };


