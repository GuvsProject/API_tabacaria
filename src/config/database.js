module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'admin',
    password: 'admin',
    database: 'mariosdb',
    define: {
        timestamps: true,
        freezeTableName: true,
    },
};