const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Express App", () => {
  it("should return Hello, Azure Pipelines on / GET", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql("Hello, Azure Pipelines!");
        done();
      });
  });
});
