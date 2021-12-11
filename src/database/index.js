require('dotenv').config();

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require ('../models/User');
const Product = require ('../models/Product');
const Complain = require ('../models/Complain');

const connection = new Sequelize(
    process.env.DB, dbConfig);

User.init(connection);
Product.init(connection);
Complain.init(connection);

module.exports = connection;
