const jwt = require('jsonwebtoken');
const md5 = require('md5');
const db = require('../config/db');
let tokken;
let PASSWORD = md5('91416644'); // Password tokken


generateTokken = (req, res) => {
    const data = {
        email: req.body.email,
        pass: req.body.pass
    }
    console.log(data);

    db.func('doLogin', [data.email, data.pass])
        .then((result) => {
            if (result.length) {
                tokken = jwt.sign({
                    email: data.email,
                    pass: data.pass
                }, PASSWORD, {});
                res.status(200).json(tokken);
                return
            } else {
                res.status(400).json({
                    message: 'Usuario ou senha incorretos'
                })
            }
        })
}

verifyTokken = (req, res, next) => {
    const auth = req.headers.auth;

    if (!auth) {
        return res.status(401).json({
            message: 'Sessão invalida'
        });
    }
    jwt.verify(auth, PASSWORD, (error, data) => {
        if (error) {
            return res.status(401).json({
                message: 'Sessão invalida'
            });
        }
        next();
    })

}

module.exports = {
    generateTokken,
    verifyTokken
}
