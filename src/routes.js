const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ComplainController = require('./controllers/ComplainController');
const OrderController = require('./controllers/OrderController');

const routes = express.Router();

routes.post('/users', UserController.store); //cadastra usuário
routes.get('/users', UserController.index); //lista usuários cadastrados
routes.patch('/users', UserController.update); //atualiza dados do usuário, busca usuário por nome
routes.post('/singleUser', UserController.singleIndex); //retorna um usuário buscado pelo email cadastrado
routes.post('/login', UserController.login); //verifica se usuario e senha batem
routes.get('/checkCpf', UserController.checkCpf); //verifica se o cpf ja existe
routes.get('/checkEmail', UserController.checkEmail); //verifica se o email ja existe
routes.get('/checkActive', UserController.checkActive); //verifica se o email ja existe

routes.post('/products', ProductController.store); //cadastra um produto
routes.get('/products', ProductController.index); //lista os produtos cadastrados
routes.patch('/products', ProductController.update); //atualiza o produto, busca o produto por id
routes.post('/singleProduct', ProductController.singleIndex); //retorna um produto, buscado pelo id
routes.get('/active', ProductController.activeProducts); //lista os produtos "active"

routes.post('/order', OrderController.store); //registra pedido
routes.get('/order', OrderController.index); //lista pedidos
routes.post('/orderbyuser', OrderController.listByUser); //lista pedidos por Id do usuario

routes.post('/complain', ComplainController.store); //registra uma reclamação

module.exports = routes;