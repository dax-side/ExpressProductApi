const productService = require('../services/product.service');
const validators = require('../utils/validators');
const cloudinary = require('../config/cloudinary');

const createProduct = async (req, res) => {
    try {
        const data = req.body;
        
        if (data.price) {
            data.price = Number(data.price);
        }
        
        validators.validateCreateProduct(data);

        let imageUrl = null;

        if (req.file) {
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'products' },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });
            imageUrl = result.secure_url;
        }

        data.imageUrl = imageUrl;

        const product = await productService.create(data);
        res.status(201).json({ message: 'Product created', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.findAll();
        res.status(200).json({ message: 'Products retrieved', products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productService.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product retrieved', product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const data = req.body;
        
        if (data.price) {
            data.price = Number(data.price);
        }
        
        validators.validateUpdateProduct(data);
        const product = await productService.update(req.params.id, data);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated', product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const success = await productService.remove(req.params.id);
        if (!success) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
