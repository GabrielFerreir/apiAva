const db = require('../config/db');
const Validation = require('../validation/validation');

function createUser(req, res) {
    const data = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    };

    let validation = new Validation();
    validation.isRequired(data.name, "O nome é obrigatorio");
    validation.isRequired(data.email, "O email é obrigatorio");
    validation.isRequired(data.pass, "O senha é obrigatoria");

    if(!validation.isValid()) {
        res.status(400).json(validation.errors());
        return
    }

    db.func('createUser', [data.name, data.email, data.pass])
        .then((result) => {
            res.status(200).json({
                message: result[0].createuser.message
            });
        });
}

module.exports = {
    createUser
}