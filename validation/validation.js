let errors = [];

function Validation() {
    errors = [];
}

Validation.prototype.isRequired = (value, message) => {
    if(!value || !value.length) {
        errors.push({message: message});
    }
}


Validation.prototype.errors = () => {
    return errors;
}

Validation.prototype.isValid = () => {
    return errors.length === 0;
}

module.exports = Validation;