const userService = require('../service/user-service');

class UserContorller {
    async registration(req, res, next) {
        try {
            const userdata = await userService.registration(email, password);
            res.cookie('refreshToken', userdata.refreshToken, { maxAge: 30 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userdata);
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            
        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {
            
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', ['456']]);
        } catch (e) {
            
        }
    }
}

module.exports = new UserContorller();
