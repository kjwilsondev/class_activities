// FILE: sample.test.js

// TODO: Challenge - add the 2 required imports here.
const assert = require("assert");
const sinon = require("sinon");
const chai = require("chai");
const should = chai.should();

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
