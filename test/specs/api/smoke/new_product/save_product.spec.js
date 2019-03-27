import rtdat from '../../../../../src/support/test_data/runtime_data';
import envApi from '../../../../../src/support/test_data/env.api';
import endpoint from '../../../../../src/support/test_data/enpoints';

const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = chai.request(rtdat.baseUrl);

describe('Status code 200 is returned after sending a request to /producthistory📚', () => {
    it("TC: Status code 200 should be returned saving a 'Regular goods' product📚📚📚📚📚📚📚", (done) => {
        let reqBody = rtdat.productHistory.reqBody();
        reqBody.dangerousGoods = false;

        server
            .post(endpoint.productHistory)
            .set('Cookie', envApi.env.qaEnv.auth)
            .send(reqBody)
            .end((err, res)=>{
                console.log(endpoint.productHistory);
                expect(res).to.have.status(200);
                done();
            })
    });

    it("TC: Status code 200 should be returned saving a 'Dangerous goods' product", (done) => {
        let reqBody = rtdat.productHistory.reqBody();
        reqBody.dangerousGoods = true;

        server
            .post(endpoint.productHistory)
            .set('Cookie', envApi.env.qaEnv.auth)
            .send(reqBody)
            .end((err, res)=>{
                expect(res).to.have.status(200);
                done();
            })
    });
});
