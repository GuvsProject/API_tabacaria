const {Model, DataTypes} = require('sequelize');

class Complain extends Model {
    static init(sequelize) {
        super.init({
            userId: DataTypes.INTEGER,
            message: DataTypes.STRING,
            idUser: DataTypes.INTEGER
        }, {
            sequelize,
            schema: 'public',
            modelName: 'Complain',
            tableName: 'Complain',
        })
    }
}

module.exports = Complain;