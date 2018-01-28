const db = require('../config/db');
const md5 = require('md5')

function getData(req, res) {
    db.func('getData')
        .then((data) => {
            res.json(data);
        });
}

module.exports = {
    getData
}