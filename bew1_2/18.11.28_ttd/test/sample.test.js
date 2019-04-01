// FILE: sample.test.js

// TODO: Challenge - add the 2 required imports here.
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should()

var sinon = require('sinon');
// var should = require('should')
// require('should-sinon')


function greaterThanFive(num) {
    if (num > 5) return true;
    return false;
}

describe('Example Sinon Stub', () => {
    it('should pass', (done) => {
        const greaterThanFive = sinon.stub().returns('something');
        greaterThanFive(0).should.eql('something');
        greaterThanFive(0).should.not.eql(false);
        done();
    });
});
