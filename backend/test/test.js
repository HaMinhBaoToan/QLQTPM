
// process.env.NODE_ENV = 'test';

// const expect = require('chai');
// const chaiHttp = require('chai-http');
const app = require('../index.js');
const request = require("supertest");
// let should = expect.should();
// expect.use(chaiHttp);

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect({"message":"Welcome to Project Support"}, done);
  })
});