const productService = require('../services/product.service');
const validators = require('../utils/validators');

const createProduct = (req, res) => {
    try {
        const data = req.body;
        validators.validateCreateProduct(data);
        let product;
        if (data.id !== undefined) {
            const id = parseInt(data.id);
            if (productService.findById(id)) {
                return res.status(400).json({ message: 'Product with this id already exists' });
            }
            product = productService.createWithId(id, data);
        } else {
            product = productService.create(data);
        }
        res.status(201).json({ message: 'Product created', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllProducts = (req, res) => {
    const products = productService.findAll();
    res.status(200).json({ message: 'Products retrieved', products });
};

const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = productService.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product retrieved', product });
};

const updateProduct = (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const data = req.body;
        validators.validateUpdateProduct(data);
        const product = productService.update(productId, data);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const partialUpdateProduct = (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const data = req.body;

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ message: 'No fields provided to update' });
        }

        validators.validatePatchProduct(data);

        const product = productService.updatePartial(productId, data);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.status(200).json({ message: 'Product partially updated', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const success = productService.remove(productId);
    if (!success) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    partialUpdateProduct,
    deleteProduct
};
