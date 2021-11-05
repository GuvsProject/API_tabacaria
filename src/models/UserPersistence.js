const User = require('../models/User');

class UserPersistence{

    static async findAndUpdateByCpf(body, cpf) {
        return await User.update(
            {
                name: body.name,
                email: body.email,
            },
            {where: {cpf: cpf}}
        );
    }

    static async findByEmail(email) {
        return await User.findOne(
            {where: {email: email}}
        );
    }
}

module.exports = UserPersistence;
