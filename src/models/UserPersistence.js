const User = require('../models/User');

class UserPersistence{
    static async findAndUpdateByCpf(body, cpf) {
        return await User.update(
            {
                name: body.name,
                password: body.password,
                email: body.email,
                birthDate: body.birthDate
            },
            {where: {cpf: cpf}}
        );
    } 

    static async findByEmail(email) {
        return await User.findOne(
            {where: {email: email}}
        );
    }

    static async verifyPassword(email,password) {
        return await User.findOne(
            {where: {email: email, password: password}}
        );
    }
}

module.exports = UserPersistence;
