const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.BIGINT,
            admin: DataTypes.STRING,
            ativo: DataTypes.STRING,
            birthDate: DataTypes.DATE
        }, {
            sequelize,
            schema: 'public',
            modelName: 'User',
            tableName: 'User',
        })
    }
}

module.exports = User;