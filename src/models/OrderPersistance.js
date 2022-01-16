const Order = require('./Order');

class OrderPersistence{

    static async findByUserId(userId) {
        return await Order.findAll(
            {where: {userId: userId}}
        );
    }

}

module.exports = OrderPersistence;
