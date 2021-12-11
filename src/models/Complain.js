const {Model, DataTypes} = require('sequelize');

class Complain extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            message: DataTypes.STRING,
            userId: DataTypes.INTEGER
        }, {
            sequelize,
            schema: 'public',
            modelName: 'Complain',
            tableName: 'Complain',
        })
    }
}

module.exports = Complain;