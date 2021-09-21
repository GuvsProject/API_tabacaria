const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {name, password, email, cpf} = req.body;

        const user = await User.create({name, password, email, cpf});

        return res.json(user);
    },

    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    }
};