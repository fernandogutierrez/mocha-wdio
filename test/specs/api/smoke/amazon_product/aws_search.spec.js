import rtdat from '../../../../../src/support/test_data/runtime_data';
import enpoint from '../../../../../src/support/test_data/enpoints';

const assert = require('assert');
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = chai.request(rtdat.baseUrl);

describe('Status code 200 is returned after sending a request to /aws', () => {
    let validASIN = ['160958905X', '1609580427', '0648085910', 'B07BMLFHS1', 'B00OLO4EXU', 'B011IX0VKQ','B01GW8YDLK'];

    validASIN.forEach((ASIN, i)=>{
        it(`TC: Status code 200 should be returned when searching ASIN: '${ASIN}' -> iteration: ${i+1}`, (done) => {
            server
                .get(enpoint.aws)
                .query({asin: ASIN})
                .end((err, res)=>{
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    let invalidAsin = ['123', 'NEWASIND1', 'aaaabbbb', '123asdeqe', '$%^333', '000000'];

    invalidAsin.forEach((ASIN, i)=>{
        it(`TC: Status code 204 No Content is returned after requesting an invalid ASIN: '${ASIN}' -> iteration: ${i+1}`, (done) =>{
            server
                .get(enpoint.aws)
                .query({asin: ASIN})
                .end((err, res)=>{
                    expect(res).to.have.status(204);
                    done();
                });
        });
    });

    // let asinWithNoData = ['B07J5VPT3N', 'B07J2RLFDC', 'B07J2RWV7W', 'B07J5VPT3N', 'B07J5FVDX3', 'B07JQ6TYLW', 'B07KRFPCNK', 'B07KRGKLVC', 'B07KRH1L4M', 'B07KSFNG5H'];
    let asinWithNoData = ['B07JQ6TYLW'];

    asinWithNoData.forEach((ASIN, i)=>{
        it(`TC: Status code 204 No Content is returned after requesting an ASIN: '${ASIN}' that does not have LS/MS/SS/W -> iteration: ${i+1}`, (done) =>{
            server
                .get(enpoint.aws)
                .query({asin: ASIN})
                .end((err, res)=>{
                    expect(res).to.have.status(204);
                    done();
                });
        });
    });

});
