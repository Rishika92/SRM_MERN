const express = require('express');
const orderHandler = require('../handlers/order.handler');

const router = express.Router();
router.get('/', orderHandler.getOrders);
router.get('/:id',
    orderHandler.getOrderById);
router.post('/',
    orderHandler.createOrder);
router.put('/:id',
    orderHandler.updateOrder);
router.delete('/:id',
    orderHandler.deleteOrder);

module.exports = router;