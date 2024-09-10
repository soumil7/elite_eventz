import RegistrationModel from '../model/RegistrationModel.js';

// Create a new registration
export const createRegistration = async (req, res) => {
    try {
        const registration = new RegistrationModel(req.body);
        await registration.save();
        res.status(201).json(registration);
    } catch (err) {
        console.error('Error creating registration:', err);
        res.status(500).json({ error: 'Failed to create registration' });
    }
};

// Get all registrations
export const getRegistrations = async (req, res) => {
    try {
        const registrations = await RegistrationModel.find();
        res.status(200).json(registrations);
    } catch (err) {
        console.error('Error fetching registrations:', err);
        res.status(500).json({ error: 'Failed to fetch registrations' });
    }
};

// Get a registration by ID
export const getRegistrationById = async (req, res) => {
    try {
        const registration = await RegistrationModel.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.status(200).json(registration);
    } catch (err) {
        console.error('Error fetching registration:', err);
        res.status(500).json({ error: 'Failed to fetch registration' });
    }
};

// Update a registration by ID
export const updateRegistration = async (req, res) => {
    try {
        const registration = await RegistrationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.status(200).json(registration);
    } catch (err) {
        console.error('Error updating registration:', err);
        res.status(500).json({ error: 'Failed to update registration' });
    }
};

// Delete a registration by ID
export const deleteRegistration = async (req, res) => {
    try {
        const registration = await RegistrationModel.findByIdAndDelete(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (err) {
        console.error('Error deleting registration:', err);
        res.status(500).json({ error: 'Failed to delete registration' });
    }
};
