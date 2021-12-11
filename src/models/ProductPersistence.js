const Product = require('../models/Product');

class ProductPersistence{

    static async findAndUpdateById(body, id) {
        return await Product.update(
            {
                name: body.name,
                quantity: body.quantity,
                price: body.price,
                description: body.description,
                status: body.status
            },
            {where: {id: id}}
        );
    }

    static async findByProductId(id) {
        return await Product.findOne(
            {where: {id: id}}
        );
    }

    static async findActives() {
        return await Product.findAll(
            {where: {status: "Ativo"}}
        );
    }
}

module.exports = ProductPersistence;
