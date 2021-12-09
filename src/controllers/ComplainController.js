const Complain = require('../models/Complain');

module.exports = {
    async store(req, res){
        const {userId, message} = req.body;

        const mess = await Complain.create({userId, message});

        return res.json(mess);
    }
};