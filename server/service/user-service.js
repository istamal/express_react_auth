const bcrypt = require('bcrypt');
const uuid = require('uuid');

const UserModel = require('../model/user-model');
const mailService = require('../service/mail-service');
const tokenService = require('../service/token-service');
const UserDto = require('../dto/user-dto');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw new Error('Пользователь с таким эмайл уже существует.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const activationLink = await uuid.v4();
        const user = await UserModel.create({ email, password: hashedPassword, activationLink });
        await mailService.sendActivationLink(email, activationLink);
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { user: userDto, tokens: tokens }
    }
}

module.exports = new UserService();