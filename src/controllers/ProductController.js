const ProductPersistence = require('../models/ProductPersistence')
const Product = require('../models/Product');

module.exports = {
    async store(req, res){
        const {name, quantity, price, description, status} = req.body;

        const product = await Product.create({name, quantity, price, description, status});
        return res.json(product);
    },

    async index(req, res){
        const product = await Product.findAll();

        return res.json(product);
    },

    async singleIndex(req, res){
        const {name} = req.body;

        const product = await Product.findByProductName(name);

        return res.json(product);
    },

    async update(req, res){
        const {id, name, quantity, price, description, status} = req.body;
        const product = await ProductPersistence.findAndUpdateById(req.body, id);

        return res.json(product);
    },
};