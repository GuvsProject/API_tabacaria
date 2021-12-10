const {Model, DataTypes} = require('sequelize');

class Complain extends Model {
    static init(sequelize) {
        super.init({
            userId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            message: DataTypes.STRING
        }, {
            sequelize,
            schema: 'public',
            modelName: 'Complain',
            tableName: 'Complain',
        })
    }
}

module.exports = Complain;