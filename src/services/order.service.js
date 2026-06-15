const orders = require('../models/order.model');
const getAllOrders = () => orders;
const getOrderById = (id) => {
    return orders.find(
        order => order.id === Number(id)
    );
};
const createOrder = (
    id,
    userId,
    productId,
    quantity
) => {

    const order = {
        id,
        userId,
        productId,
        quantity
    };

    orders.push(order);

    return order;
};

const updateOrder = (
    id,
    updatedData
) => {

    const order = getOrderById(id);

    if (!order) return null;

    Object.assign(order, updatedData);

    return order;
};
const deleteOrder = (id) => {

    const index = orders.findIndex(
        order => order.id === Number(id)
    );

    if (index === -1) return false;

    orders.splice(index, 1);

    return true;
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};