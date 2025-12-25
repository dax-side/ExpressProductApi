const validateID = (id) => {
    if(typeof id !== 'number'|| isNaN(id) || id <= 0) {
        throw new Error('Invalid ID');
    }
}

const validateCreateProduct = (data) => {
    if (typeof data.name !== 'string' || data.name.trim() === '')
        throw new Error('Invalid name field');
    if (typeof data.price !== 'number' || isNaN(data.price) || data.price <= 0)
        throw new Error('Invalid price field');
    if (typeof data.description !== 'string' || data.description.trim() === '')
        throw new Error('Invalid description field');
    if (data.id !== undefined){
        validateID(data.id);
    }
};

const validateUpdateProduct = (data) => {
    if (data.name === undefined || data.price === undefined || data.description === undefined)
        throw new Error('All fields must be provided for PUT');
    if (data.id !== undefined){
        validateID(data.id);
    }
    validateCreateProduct(data);
};

const validatePatchProduct = (data) => {
    if (data.name !== undefined && (typeof data.name !== 'string' || data.name.trim() === ''))
        throw new Error('Invalid name field');
    if (data.price !== undefined && (typeof data.price !== 'number' || isNaN(data.price) || data.price <= 0))
        throw new Error('Invalid price field');
    if (data.description !== undefined && (typeof data.description !== 'string' || data.description.trim() === ''))
        throw new Error('Invalid description field');
};

module.exports = {
    validateCreateProduct,
    validateUpdateProduct,
    validatePatchProduct
};
