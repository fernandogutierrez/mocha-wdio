const newman = require('newman');
const amzCollection = require('./csv_vs_fba.coll.json');
// const csvData = require('./test_data.csv');
// let env = require('../../../../../test/config/newman.cloud.env');
let env = require('../../../../../test/config/newman.cloud.env');

// env.values[1].value = 'http://192.168.0.123/fba/';
const csvFilePath = `${__dirname}/test_data.csv`;
const csv = require('csvtojson');
console.log(__dirname);
csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        newman.run(
            {
                collection: amzCollection,
                reporters: ['cli', 'htmlextra'],
                environment: env,
                iterationData: jsonObj
            }, err => {
            if (err) throw err;
        });
    });
