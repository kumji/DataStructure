'use strict';

var expect = require('chai').expect;
var ArrayAlgorithm = require(__dirname + '/../lib/arrayAlgorithm.js');

var array = new ArrayAlgorithm();


describe('push function', function() {
	before(function() {	array.push('apple');});
	it('should find apple in the array', function() {
		expect(array).to.have.property('apple');
	});
});

describe('pop function', function() {
	before(function() { array.pop('apple');});
	it('arrya is empty', function(){
		expect(array).to.be.empty;
	});
});

