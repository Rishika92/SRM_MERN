const express = require('express');
const productHandler = require('../handlers/product.handler');

const router = express.Router();

router.get('/', productHandler.getProducts);
router.get('/:id', productHandler.getProductById);
router.post('/', productHandler.createProduct);
router.put('/:id',productHandler.updateProduct);

router.delete('/:id', productHandler.deleteProduct);
module.exports = router;