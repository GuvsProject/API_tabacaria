const User = require('../models/User');
const UserPersistence = require('../models/UserPersistence');

module.exports = {
    async store(req, res){
        const {name, password, email, cpf} = req.body;

        const user = await User.create({name, password, email, cpf});

        return res.json(user);
    },

    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async singleIndex(req, res){
        const {email} = req.body;

        const user = await User.findByEmail(email);

        return res.json(user);
    },

    async update(req, res){
        const {name, password, email, cpf} = req.body;
        const user = await UserPersistence.findAndUpdateByCpf(req.body, cpf);

        return res.json(user);
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await UserPersistence.verifyPassword(req.body, email, password);

        return res.json(user);
    },
};