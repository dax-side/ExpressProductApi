const Product = require('../models/product.model');

const create = async (data) => {
    const newProduct = new Product({
        name: data.name,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl || null
    });
    await newProduct.save();
    return newProduct;
};

const findAll = async () => {
    return await Product.find();
};

const findById = async (id) => {
    return await Product.findById(id);
};

const update = async (id, data) => {
    const updateFields = {};
    if (data.name !== undefined) updateFields.name = data.name;
    if (data.price !== undefined) updateFields.price = data.price;
    if (data.description !== undefined) updateFields.description = data.description;
    if (data.imageUrl !== undefined) updateFields.imageUrl = data.imageUrl;

    const product = await Product.findByIdAndUpdate(
        id,
        updateFields,
        { new: true }
    );
    return product;
};

const remove = async (id) => {
    const result = await Product.findByIdAndDelete(id);
    return result !== null;
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
