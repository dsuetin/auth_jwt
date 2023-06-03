const userService = require('../service/user-service');
require('dotenv').config({ path: require('find-config')('.env') })
class UserController {
    async registration(req, res, next) {
        console.log('!!!!!!!!!!!');
        try {
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
        }
    }
    async login(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
        }
    }
    async logout(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
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
        }
    }
    async refresh(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
        }
    }
    async getUsers(req, res, next) {
        console.log("yyyyyyyyy");
        try {
            res.json(['123', '456']);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserController();