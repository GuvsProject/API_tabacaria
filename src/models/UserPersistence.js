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
}

module.exports = UserPersistence;
