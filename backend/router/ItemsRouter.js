import express from 'express';
import {
    addItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
} from '../controller/ItemsController.js'; // Adjust the path accordingly

const itemsRouter = express.Router();

// Route to create a new item (event)
itemsRouter.post('/items', addItem);

// Route to get all items (events)
itemsRouter.get('/items', getItems);

// Route to get a single item (event) by ID
itemsRouter.get('/items/:id', getItemById);

// Route to update an item (event) by ID
itemsRouter.put('/items/:id', updateItem);

// Route to delete an item (event) by ID
itemsRouter.delete('/items/:id', deleteItem);

export default itemsRouter;
