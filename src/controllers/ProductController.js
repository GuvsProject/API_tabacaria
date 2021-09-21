const Product = require('../models/Product');

module.exports = {
    async store(req, res){
        const {name, quantity, price} = req.body;

        const product = await Product.create({name, quantity, price});

        return res.json(product);
    },

    async index(req, res){
        const product = await Product.findAll();

        return res.json(product);
    }
};