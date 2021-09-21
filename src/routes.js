const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);

module.exports = routes;