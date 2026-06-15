const orderService = require('../services/order.service');
const getOrders = (req, res) => {
    res.json(orderService.getAllOrders());
};
const getOrderById = (req, res) => {
    const order = orderService.getOrderById(
        req.params.id
    );
    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }
    res.json(order);
};
const createOrder = (req, res) => {
    const {
        id,
        userId,
        productId,
        quantity
    } = req.body;
    const order = orderService.createOrder(
        id,
        userId,
        productId,
        quantity
    );
    res.status(201).json(order);
};
const updateOrder = (req, res) => {
    const order = orderService.updateOrder(
        req.params.id,
        req.body
    );
    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }
    res.json(order);
};
const deleteOrder = (req, res) => {
    const deleted =
        orderService.deleteOrder(
            req.params.id
        );
    if (!deleted) {
        return res.status(404).json({
            message: "Order not found"
        });
    }
    res.json({
        message: "Order deleted"
    });
};
module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};