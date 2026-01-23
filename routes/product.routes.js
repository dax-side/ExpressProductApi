const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const authorize = require('../middleware/authorize.middleware');
const upload = require('../middleware/upload.middleware');

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    
    deleteProduct
} = require('../controllers/product.controller');

router.post('/', authMiddleware, authorize('admin'), upload.single('image'), createProduct);
router.get('/', authMiddleware, getAllProducts);
router.get('/:id', authMiddleware, getProductById);
router.put('/:id', authMiddleware, authorize('admin'), updateProduct);
router.delete('/:id', authMiddleware, authorize('admin'), deleteProduct);

module.exports = router;
