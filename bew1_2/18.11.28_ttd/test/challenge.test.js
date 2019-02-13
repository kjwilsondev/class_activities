// FILE: challenge.test.js

// TODO: Challenge - add the 2 required imports here.
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should()

var sinon = require('sinon');
// var should = require('should')
// require('should-sinon')


function kj_is_sad(bool) {
    if (bool) return "yea that boy depressed";
    return "nah he straight";
}

describe('KJ\'s mood', () => {
    it('should pass', (done) => {
        const kj_is_sad = sinon.stub().returns('something');
        // const true = (4 > 0)
        // const false = (4 < 0)
        kj_is_sad(true).should.eql('something');
        kj_is_sad(false).should.not.eql(false);
        done();
    });
});
