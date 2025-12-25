let products = [];
let nextId = 1;

const create = (data) => {
    const newProduct = { id: nextId++, ...data };
    products.push(newProduct);
    return newProduct;
};

const createWithId = (id, data) => {
    const newProduct = { id, name: data.name, price: data.price, description: data.description };
    products.push(newProduct);
    return newProduct;
};

const findAll = () => products;

const findById = (id) => products.find(p => p.id === id);

const update = (id, data) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { id, ...data };
    return products[index];
};

const updatePartial = (id, data) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...data };
    return products[index];
};

const remove = (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    return true;
};

module.exports = {
    create,
    createWithId,
    findAll,
    findById,
    update,
    updatePartial,
    remove
};
