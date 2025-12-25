const express = require('express');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = process.env.PORT || 1888;

app.use(express.json());

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
