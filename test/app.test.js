const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Importa la aplicación para realizar solicitudes
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET /", () => {
  it("should return Hello, Azure Pipelines with Docker!", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello, Azure Pipelines with Docker!");
        done();
      });
  });
});
