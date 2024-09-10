import express from 'express';
import {
    createRegistration,
    getRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration
} from '../controller/RegistrationController.js'; // Adjust the path accordingly

const registrationRouter = express.Router();

// Route to create a new registration
registrationRouter.post('/registrations', createRegistration);

// Route to get all registrations
registrationRouter.get('/registrations', getRegistrations);

// Route to get a registration by ID
registrationRouter.get('/registrations/:id', getRegistrationById);

// Route to update a registration by ID
registrationRouter.put('/registrations/:id', updateRegistration);

// Route to delete a registration by ID
registrationRouter.delete('/registrations/:id', deleteRegistration);

export default registrationRouter;
