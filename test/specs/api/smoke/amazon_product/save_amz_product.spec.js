import rtdat from '../../../../../src/support/test_data/runtime_data';
import envApi from '../../../../../src/support/test_data/env.api';
import endpoint from '../../../../../src/support/test_data/enpoints';

const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = chai.request(rtdat.baseUrl);

describe('Status code 200 is returned after sending a request to /producthistory for amazon products', () => {
    let tcData = [ {ASIN: "B07K5Q23B5", SKU:"4350462254"}, {ASIN: "B07HJTN7D6", SKU:"Dash CameraYR907"},
        {ASIN: "B07L3CCM45", SKU:null}, {ASIN: "B07BMLFHS1", SKU:null},
        {ASIN: "B072QFQF77", SKU:"MRSF-100-BLK"}, {ASIN: "B016Z3EHN6", SKU:"Universal Sleeve Case Bag 13_Dark Grey"} ];

    tcData.forEach((asinSku, i) => {
        it(`TC: Status code 200 should be returned saving a 'Regular goods' using ASIN: '${asinSku.ASIN}'for amazon products -> iteration: ${i+1}`, (done) => {
            let reqBody = rtdat.amazonProductHistory.reqBody();
            reqBody.dangerousGoods = false;
            reqBody.asin = asinSku.ASIN;
            reqBody.sku = asinSku.SKU;


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

    tcData.forEach((asinSku, i) => {
        it(`TC: Status code 200 should be returned saving a 'Dangerous goods' for amazon products -> iteration: ${i+1}`, (done) => {
            let reqBody = rtdat.amazonProductHistory.reqBody();
            reqBody.dangerousGoods = true;
            reqBody.asin = asinSku.ASIN;
            reqBody.sku = asinSku.SKU;

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
});
