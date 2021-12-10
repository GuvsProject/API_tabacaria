const { truncate } = require('../models/User');
const User = require('../models/User');
const UserPersistence = require('../models/UserPersistence');

module.exports = {
    async store(req, res){
        const {name, password, email, cpf, birthDate} = req.body;

        const user = await User.create({name, password, email, cpf, birthDate});

        return res.json(user);
    },

    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async update(req, res){
        const {name, password, email, cpf, birthDate} = req.body;
        const user = await UserPersistence.findAndUpdateByCpf(req.body, cpf);
        if (user==1){
            return res.status(200).json();
        } else {
            return res.status(400).json();
        }
    },

    async singleIndex(req, res){
        const {email} = req.body;

        const user = await UserPersistence.findByEmail(email);

        return res.json(user);
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await UserPersistence.verifyPassword(email, password);
        if (user != null) {
            return res.json(true);
        } else {
            return res.json(false);
        }
    }
};