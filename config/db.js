const configDb = {
    'host': 'localhost',
    'port': 5432,
    'database': 'ava',
    'user': 'postgres',
    'password': '91416644'
}

var pg = require('pg-promise')()(configDb);

module.exports = pg;
