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

    static async findByProductName(name) {
        return await Product.findOne(
            {where: {name: name}}
        );
    }

    static async findActives() {
        return await Product.findAll(
            {where: {status: "Ativo"}}
        );
    }
}

module.exports = ProductPersistence;
