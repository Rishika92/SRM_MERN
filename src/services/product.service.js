const products = require('../models/product.model');
const getAllProducts = () => products;
const createProduct = (id, name, price, stock) => {
    const product = {
        id,
        name,
        price,
        stock
    };
    products.push(product);
    return product;
};
const getProductById = (id) => {
    return products.find(
        product => product.id === Number(id)
    );
};
const updateProduct = (
    id,
    updatedData
) => {

    const product = products.find(
        product => product.id === Number(id)
    );

    if (!product) {
        return null;
    }

    Object.assign(product, updatedData);

    return product;
};

const deleteProduct = (id) => {

    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        return false;
    }

    products.splice(index, 1);

    return true;
};
module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};