import rtdat from '../../../../../src/support/test_data/runtime_data';
import envApi from '../../../../../src/support/test_data/env.api';
import enpoint from '../../../../../src/support/test_data/enpoints';

const assert = require('assert');
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = chai.request(rtdat.baseUrl);

describe('Status code 200 is returned after sending a request to /myasin.', () => {
    let tcData = [ "B07K5Q23B5", "B07HJTN7D6", "B07L3CCM45", "B07BMLFHS1", "B072QFQF77", "B016Z3EHN6"];

    tcData.forEach((asin, i) => {
        it(`TC: Status code 200 should be returned saving ASIN: '${asin}' for 'Regular goods' -> iteration: ${i+1}`,
                done => {

            let reqBody = rtdat.myASIN.reqBody();
            reqBody.isDangerous = false;
            reqBody.name = asin;

            server
                .post(enpoint.myAsin)
                .set('Cookie', envApi.env.qaEnv.auth)
                .send([reqBody])
                .end((err, res)=>{
                    expect(res).to.have.status(200);
                    done();
                })
        });
    });

    tcData = [ "6666666666", "B007SXJ1A2", "B007SXJ1VG", "B007SXJ2DS", "B007SXJ13E", "B007SXJ1RK", "B0083WYB7U","B0083WYBZ2", "B0083WYDRI", "B0083WYF4Y", "B007RN5WDS"];

    tcData.forEach((asin, i) => {
        it(`TC: Status code 200 should be returned saving ASIN: '${asin}' for 'Dangerous goods' -> iteration: ${i+1}`,
            done => {
                let reqBody = rtdat.myASIN.reqBody();
                reqBody.isDangerous = true;
                reqBody.name = asin;

                server
                    .post(enpoint.myAsin)
                    .set('Cookie', envApi.env.qaEnv.auth)
                    .send([reqBody])
                    .end((err, res)=>{
                        expect(res).to.have.status(200);
                        done();
                    })
            });
    });


    it(`TC: Status code 200 should be returned when getting ASIN for the current date`,
        done => {

            server
                .get(enpoint.myAsin)
                .query(rtdat.myASIN.filterParams)
                .set('Cookie', envApi.env.qaEnv.auth)
                .end((err, res)=>{
                    expect(res).to.have.status(200);
                    done();
                })
        });
});
