const axios = require('axios');
const Todo = require('../models/todo.model');

const fetchAndSaveTodo = async (req, res) => {
    try {
        // Call external API
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        
        const todoData = response.data;

        // Check if todo already exists
        let todo = await Todo.findOne({ id: todoData.id });

        if (todo) {
            // If exists, return the existing one
            return res.status(200).json({ 
                message: 'Todo already exists in database', 
                todo 
            });
        }

        // Save to database
        todo = new Todo({
            userId: todoData.userId,
            id: todoData.id,
            title: todoData.title,
            completed: todoData.completed
        });

        await todo.save();

        res.status(201).json({ 
            message: 'Todo fetched and saved successfully', 
            todo 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ message: 'Todos retrieved', todos });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    fetchAndSaveTodo,
    getAllTodos
};
