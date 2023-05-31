const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw new Error(`User with this email: ${email} already exist`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({email, hashPassword});

    }
}

module.exports = new UserService();