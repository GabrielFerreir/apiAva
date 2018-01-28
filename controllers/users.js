const db = require('../config/db');

function createUser(req, res) {
    const data = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    };
    let err = {
        exists: false,
        message: []
    };

    // VALIDAÇÕES
    if(!data.name) {
        err.exists = true; err.message.push('Nome é obrigatorio');
    }
    if(!data.email) {
        err.exists = true; err.message.push('Email é obrigatorio');
    }
    if(!data.pass) {
        err.exists = true; err.message.push('Senha é obrigatorio');
    }

    if(err.exists) {
        res.status(400).json({
            message: err.message.join(', ')
        });
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