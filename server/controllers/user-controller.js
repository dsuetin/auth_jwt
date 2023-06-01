const userService = require('../service/user-service');
class UserController {
    async registration(req, res, next) {
        console.log('!!!!!!!!!!!');
        try {
            const { email, password } = req.body;

            console.log('email', email);
            console.log('password', password);
            const userData = await userService.registration(email, password);
            console.log('hui');
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

        } catch (error) {
            console.log(error);
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