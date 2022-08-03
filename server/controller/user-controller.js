const userService = require('../service/user-service');

class UserContorller {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body;
            const userdata = await userService.registration(email, password);
            /** @maxAge - время жизни в милесекундах, здесь это 30 дней */
            /** @httpOnlu - Использовать только через http протокол */
            /**
             * Куки HTTPonly не доступны из JavaScript через свойства Document.cookie API,
             * что помогает избежать межсайтового скриптинга (XSS (en-US)).
             * Устанавливайте этот флаг для тех кук, к которым не требуется обращаться через JavaScript.
             * В частности, если куки используются только для поддержки сеанса, то в JavaScript они не нужны
             * так что в этом случае следует устанавливать флаг HttpOnly
             */
            res.cookie('refreshToken', userdata.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
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
