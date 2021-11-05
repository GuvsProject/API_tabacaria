const Product = require('../models/Product');

class ProductPersistence{

    static async findAndUpdateById(body, id) {
        return await Product.update(
            {
                name: body.name,
                quantity: body.quantity,
                price: body.price,
            },
            {where: {id: id}}
        );
    }

    static async findByProductName(name) {
        return await User.findOne(
            {where: {name: name}}
        );
    }
}

module.exports = ProductPersistence;
