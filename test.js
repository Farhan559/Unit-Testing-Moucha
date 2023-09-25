const {describe,it} = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const sum = require('./index.js');

describe('sum Fuction',()=>{
    it('it should return sum',()=>{
        let result = sum(2,7);
        expect(result).to.equal(9)
    })
})