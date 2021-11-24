const Complain = require('../models/Complain');

module.exports = {
    async store(req, res){
        const {name, message} = req.body;

        const mess = await Complain.create({name, message});

        return res.json(mess);
    },
};