import mongoose from 'mongoose';

// Define the schema for the event items
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['Conference', 'Workshop', 'Seminar', 'Webinar', 'Meetup', 'Networking'],
        default: 'Conference',
        required: true
    },
    image: {
        type: String, // This will store the image URL or the path to the image
        // required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model using the schema
const ItemModel = mongoose.model('Item', ItemSchema);

// Export the model
export default ItemModel;
