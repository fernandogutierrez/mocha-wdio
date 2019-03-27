const newman = require('newman');
const amzCollection = require('./amazon_vs_fba.coll.json');
let env = require('../../../../../test/config/newman.cloud.env');

// env.values[1].value = 'http://192.168.0.123/fba/';

newman.run({
    collection: amzCollection,
    reporters: ['cli', 'htmlextra'],
    environment: env,
    iterationCount: 50
}, err => {
    if (err) throw err;
});
