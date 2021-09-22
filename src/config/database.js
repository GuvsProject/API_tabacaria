require('dotenv').config();

module.exports = {
    port: 5432,
    url: process.env.DB,
    dialect: "postgres", // we need to implement 
    define: {
        timestamps: true,
        freezeTableName: true,
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};