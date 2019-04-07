var expect  = require('chai').expect;
var request = require('request');

it('Main page status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});



  it('Error page', function(done) {
    request('http://localhost:3000/asdasd', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});


it('Data from backend', function(done) {
    request('http://localhost:3000/express_backend', function(error, response, body) {
        expect(typeof(response)).to.equal("object");
        done();
    });
});