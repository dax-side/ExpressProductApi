const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
