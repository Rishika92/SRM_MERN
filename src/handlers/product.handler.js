const productService = require('../services/product.service');

const getProducts = (req, res) => {
    const products = productService.getAllProducts();
    res.json(products);
};

const getProductById = (req, res) => {
    const product = productService.getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
};

const createProduct = (req, res) => {
    const { id, name, price, stock } = req.body;

    const product = productService.createProduct(
        id,
        name,
        price,
        stock
    );

    res.status(201).json(product);
};
const updateProduct = (
    req,
    res
) => {

    const product =
        productService.updateProduct(
            req.params.id,
            req.body
        );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
};

const deleteProduct = (
    req,
    res
) => {

    const deleted =
        productService.deleteProduct(
            req.params.id
        );

    if (!deleted) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json({
        message:
            "Product deleted successfully"
    });
};
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};