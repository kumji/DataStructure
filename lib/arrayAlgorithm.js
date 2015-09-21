'use strict';

//var fruit = new Array();
var fruit =['apple', 'banana', 'fig', 'grape', 'blueberry', 'cherry'];

var beatbox = ['boom','chiki', 'bam', 'chiki', 'boom', 'chiki', 'bam', 'boom', 'boom'];
var returnValue;


Array.prototype.push = function(data) {
	this[this.length] = data;
	return this.length;
};



Array.prototype.pop = function() {
	returnValue = this[this.length-1];
	this.length--;
	return returnValue;
};


Array.prototype.shift = function() {
	for(var i = 0; i < this.length-1; i++) {
		this[i] = this[i+1];
	}
	this.length--;
	return this[0];
};

Array.prototype.unshift = function(data) {
	for(var i = this.length; i > 0; i--) {
		this[i] = this[i-1];
	}
	this[0] = data;
	return this.length;
};

Array.prototype.unique = function() {
	var uniqueArray = new Array();
	for(var i = 0; i < this.length; i++) {
		for(var j = i+1; j < this.length+1; j++) {
			if (this[i] !== null && this[i] === this[j]) 
				this[j] = null;
		}
	}
	for(i = 0; i < this.length; i++) {
		if(this[i] != null) 
			uniqueArray.push(this[i]);
	}
	return uniqueArray;
};


Array.prototype.frequency2 = function() {
	var temp = new Array();
	var word, count, max = 0;
	for(var i = 0; i< this.length; i++) {
		for(var j = 0; j < this[i].length; j++){
			temp.push(this[i].charAt(j));
		}
	}
	for(i = 0; i < this.length; i++) {
		count = 0;
		for(var j = i+1; j <this.length-1; j++) {
			if(temp[i]===temp[j])
				count++;
		}
		if(max < count) {
			max = count;  
			word = temp[i];
		}
	}
	return word;
};

module.exports = exports = Array;


// var frequency = module.exports = exports = function(arr) {
// 	var temp = new Array();
// 	var word, count, max = 0;
// 	for(var i = 0; i< arr.length; i++) {
// 		temp[i] = arr[i].charAt(0);
// 	}
// 	for(i = 0; i < arr.length; i++) {
// 		count = 0;
// 		for(var j = i+1; j <arr.length-1; j++) {
// 			if(temp[i]===temp[j])
// 				count++;
// 		}
// 		if(max < count) {
// 			max = count;  
// 			word = temp[i];
// 		}
// 	}
// 	return word;
// };

//module.exports = exports = frequency;




//module.exports = Array;

//console.log(frequency(beatbox));
/*
console.log(fruit.frequency2());

console.log(beatbox.frequency2());

console.log(fruit);

fruit.push('pear');
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.unshift('strawberry');
console.log(fruit);

*/
