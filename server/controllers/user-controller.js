const userService = require('../service/user-service');
require('dotenv').config({ path: require('find-config')('.env') })
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
class UserController {
    async registration(req, res, next) {
        console.log('!!!!!!!!!!!');
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()));
            }
            const { email, password } = req.body;

            console.log('email', email);
            console.log('password', password);
            const userData = await userService.registration(email, password);
            console.log('userData', userData);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
            // return res.json('lala');

        } catch (error) {
            console.log("in catch", error);
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            console.log('email', email);
            console.log('password', password);
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    async logout(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            console.log('activationLink', activationLink)
            console.log('process.env.CLIENT_URL', process.env.CLIENT_URL)
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            console.log('activate', error);
            next(error);
        }
    }
    async refresh(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    async getUsers(req, res, next) {
        console.log("yyyyyyyyy");
        try {
            res.json(['123', '456']);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = new UserController();