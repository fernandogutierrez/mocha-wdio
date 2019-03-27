const newman = require('newman');
const insertTables = require('./insert_tables.json');
let env = require('./cloud_env.json');

// env.values[1].value = 'http://192.168.0.123/fba/';

newman.run({
    collection: insertTables,
    reporters: ['cli', 'htmlextra'],
    environment: env
}, err => {
    if (err) throw err;
});
