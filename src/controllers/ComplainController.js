const Complain = require('../models/Complain');

module.exports = {
    async store(req, res){
        const {name, message, userId} = req.body;

        const mess = await Complain.create({name, message, userId});

        return res.json(mess);
    },
};