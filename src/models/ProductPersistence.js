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
}

module.exports = ProductPersistence;
