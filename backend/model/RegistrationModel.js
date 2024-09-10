import mongoose from 'mongoose';

// Define the schema for the registration model
const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures unique email addresses
    },
    eventName: {
        type: String,
        required: false
    },
    eventCategory: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    whatsappNumber: {
        type: String,
        required: false
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model using the schema
const RegistrationModel = mongoose.model('Registration', RegistrationSchema);

// Export the model
export default RegistrationModel;
