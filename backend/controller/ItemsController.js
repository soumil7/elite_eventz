import ItemModel from '../model/ItemsModel.js';
//import { v4 as uuidv4 } from 'uuid'; // To generate unique file names if needed (optional)

// Create a new event (item)
export const addItem = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image = req.file ? req.file.filename : null; // Assuming you're handling image uploads with multer

        // Check if all required fields are provided
        if (!name && !description && !price && !category && !image) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const newItem = new ItemModel({
            name,
            description,
            price,
            category,
            image // This would be the path or URL of the image
        });

        await newItem.save();
        res.status(201).json({ success: true, message: 'Event added successfully', data: newItem });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error while adding event', error: error.message });
    }
};

// Get all events (items)
export const getItems = async (req, res) => {
    try {
        const items = await ItemModel.find();
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error while fetching events', error: error.message });
    }
};

// Get a single event (item) by ID
export const getItemById = async (req, res) => {
    try {
        const item = await ItemModel.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error while fetching the event', error: error.message });
    }
};

// Update an event (item)
export const updateItem = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image = req.file ? req.file.filename : null; // Handling image updates if necessary

        const updatedData = {
            name,
            description,
            price,
            category,
            ...(image && { image }) // Update image only if a new one is provided
        };

        const updatedItem = await ItemModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        res.status(200).json({ success: true, message: 'Event updated successfully', data: updatedItem });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error while updating event', error: error.message });
    }
};

// Delete an event (item)
export const deleteItem = async (req, res) => {
    try {
        const item = await ItemModel.findByIdAndDelete(req.params.id);

        if (!item) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        res.status(200).json({ success: true, message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error while deleting event', error: error.message });
    }
};
