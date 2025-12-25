const express = require('express');
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    partialUpdateProduct,
    deleteProduct
} = require('../controllers/product.controller');

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.patch('/:id', partialUpdateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
