require('dotenv').config({ debug: false });
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

const app = express();
const PORT = process.env.PORT || 1888;

connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
