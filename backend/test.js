const superTest = require('supertest')
const server = superTest.agent('http://localhost:4000')

describe('Sample test', function () {
  it('should return home page - test content type', function (done) {
    server.get('/')
      .expect('Content-type', /text/)
      .end(function (err, res) {
        done()
      })
  })

  it('should return home page - test status', function (done) {
    server.get('/')
      .expect(200)
      .end(function (err, res) {
        done()
      })
  })
})