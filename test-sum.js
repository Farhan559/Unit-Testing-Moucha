const assert = require('chai').assert;
const {sum,subtract} = require('./index.js');

    describe('sum function',()=>{
        it('should return the sum of two positive numbers',()=>{
            assert.equal(sum(2,3),5);
        });
        it('should return sum of a positive number and zero',()=>{
            assert.equal(sum(5,0),5);
        });
        it('should return the sum of a negative number and a positive number',()=>{
            assert.equal(sum(-5, 3), -2);
        });
        it('should return zero when subtracting zero from zero', () => {
            assert.equal(subtract(0, 0), 0);
        });
        it('should return subtracting from 10 and 5', () => {
            assert.equal(subtract(10, 5), 5);
        });
    })