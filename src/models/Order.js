const {Model, DataTypes} = require('sequelize');

class Order extends Model {
    static init(sequelize) {
        super.init({
            userId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
            status: DataTypes.STRING,
            orderDate: DataTypes.DATE
        }, {
            sequelize,
            schema: 'public',
            modelName: 'Order',
            tableName: 'Order',
        })
    }
}

module.exports = Order;