import rtdat from '../../../../../src/support/test_data/runtime_data';
import endpoint from '../../../../../src/support/test_data/enpoints';

const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = chai.request(rtdat.baseUrl);

describe('Status code 200 is returned after sending a request to /calculator', () => {
    it("TC1: Status code 200 should be returned for 'Regular goods' products", (done) => {
        server
            .post(endpoint.calculator)
            .query(endpoint.getCalParams(rtdat.calculator.defaultUrlParams))
            .send(rtdat.calculator.reqBody())
            .end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            })
    });

    it("TC2: Status code 200 should be returned for 'Dangerous goods' products", (done) => {
        rtdat.calculator.defaultUrlParams.dangerousGoods = 'true';
        server
            .post(endpoint.calculator)
            .query(endpoint.getCalParams(rtdat.calculator.defaultUrlParams))
            .send(rtdat.calculator.reqBody())
            .end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            })
    });
});
