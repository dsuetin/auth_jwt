const userService = require('../service/user-service');
class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log('hui');
        } catch (error) {
            console.log(error);
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