const OrderPersistence = require('../models/OrderPersistance');
const Order = require('../models/Order');

module.exports = {
    async store(req, res){
        const {userId, productId, quantity, price, status, orderDate} = req.body;

        const order = await Order.create({userId, productId, quantity, price, status, orderDate});
        
        return res.json(order);
    },

    async index(req, res){
        const order = await Order.findAll();

        return res.json(order);
    },

    async listByUser(req, res){
        const {userId} = req.body;

        const order = await OrderPersistence.findByUserId(userId);

        return res.json(order);
    },

};