const User = require('../models/User');

class UserPersistence{
    static async findAndUpdateByCpf(body, cpf) {
        return await User.update(
            {
                name: body.name,
                password: body.password,
                email: body.email,
                admin: body.admin,
                ativo: body.ativo,
                // birthDate: body.birthDate
            },
            {where: {cpf: cpf}}
        );
    } 

    static async findByEmail(email) {
        return await User.findOne(
            {where: {email: email}}
        );
    }
    
    static async VerifyActive(email) {
        return await User.findOne(
            {where: {email: email, ativo: "Sim"}},
        );
    }


    static async verifyPassword(email,password) {
        return await User.findOne(
            {where: {email: email, password: password}}
        );
    }

    static async verifyCPF(cpf) {
        return await User.findOne(
            {where: {cpf: cpf}}
        );

    }

    static async verifyEmail(email) {
        return await User.findOne(
            {where: {email: email}}
        );

    }
}

module.exports = UserPersistence;
