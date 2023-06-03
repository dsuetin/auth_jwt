const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dto/user-dto');
const ApiError = require('../exceptions/api-error')
class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });
        console.log('candidate', candidate);
        if (candidate) {
            throw ApiError.BadRequest(`User with this email: ${email} already exist`);
            throw new Error(`User with this email: ${email} already exist`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4(); 
        const user = await UserModel.create({ email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
        
    }

    async activate(activationLink) {
        console.log('activate in servise', activationLink)
        const user = await UserModel.findOne({ activationLink });
        if (!user) {
            throw new Error('Error: Activation link is uncorrect');
        }
        user.isActivated = true;
        await user.save();

    }
}

module.exports = new UserService();