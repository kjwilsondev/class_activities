const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js');

chai.use(chaiHttp);

// Describe is like a container for our tests.
describe('Hello World Route Test', () => {

    // Test Case 1
    it('Returns a 200 Response', (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                if (error) done(error);
                expect(response).to.have.status(200);
                done();
            });
    });

    // Test Case 2
    it('Returns a "Hello World" message', (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                if (error) done(error);
                expect(response.body).to.be.deep.equal({
                    message: 'Hello, world!'
                });
                done();
            });
    });
});
