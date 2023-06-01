module.exports = class UserDto { // tata transport object
    email;
    id;
    isActivated;
    constructor(model) {
        this.email = model.email;
        this.id = model._id
        this.isActivated = model.isActivated
    }
}