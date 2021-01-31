// process.env.NODE_ENV = 'test';

const server = require("../index.js");
const request = require("supertest");
let chai = require("chai");
let chaiHttp = require("chai-http");
// let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
// const productsModel = require("../server/models/order-detail.model");

describe("Details", () => {
  beforeEach((done) => {
    done();
  });
  describe("GET /api/order-detail", () => {
    it("respond with list Product", (done) => {
      // const list = await productsModel.single(1);
      // chai.request(app).get("/api/order-detail/1").expect(list[0], done);
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          res.body.should.be.eql({ message: "Welcome to Project Support" }); // fixme :)
          done();
        });
    });
  });
});

describe("Error", () => {
  beforeEach((done) => {
    done();
  });
  describe("GET /error", () => {
    it("respond with list Product", (done) => {
      // const list = await productsModel.single(1);
      // chai.request(app).get("/api/order-detail/1").expect(list[0], done);
      chai
        .request(server)
        .get("/asdf")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("Object");
          res.body.should.be.eql({
            error_message: "Endpoint not found!",
          }); // fixme :)
          done();
        });
    });
  });
});


describe("Error", () => {
  beforeEach((done) => {
    done();
  });
  describe("GET /error", () => {
    it("respond with list Product", (done) => {
      // const list = await productsModel.single(1);
      // chai.request(app).get("/api/order-detail/1").expect(list[0], done);
      chai
        .request(server)
        .get("/asdf")
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("Object");
          res.body.should.be.eql({
            error_message: "Endpoint not found!",
          }); // fixme :)
          done();
        });
    });
  });
});
