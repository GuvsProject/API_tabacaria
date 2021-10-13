const {Model, DataTypes} = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
        }, {
            sequelize,
            schema: 'public',
            modelName: 'Product',
            tableName: 'Product',
        })
    }
}

module.exports = Product;