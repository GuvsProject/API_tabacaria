const Complain = require('../models/Complain');

module.exports = {
    async store(req, res){
        const {userId, name, message} = req.body;

        const mess = await Complain.create({userId, name, message});

        return res.json(mess);
    }
};