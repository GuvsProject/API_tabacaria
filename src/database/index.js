require('dotenv').config();
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require ('../models/User');
const Product = require ('../models/Product');

console.log(process.env.DB)
const connection = new Sequelize( //caso seja necessario executar localmente, ira modificar o que deve ser escrito
    process.env.DB, dbConfig);
User.init(connection);
Product.init(connection);

module.exports = connection;