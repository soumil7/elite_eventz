import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import registrationRouter from './router/RegistrationRoute.js';
import userRouter from './router/UserRouter.js';
import itemsRouter from './router/ItemsRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from the server!");
});



// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://eliteeventz:eliteeventz@eliteeventz.hcbqw.mongodb.net/?retryWrites=true&w=majority&appName=eliteeventz");
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

// Connect to MongoDB
connectDB();

// // Use registration routes
app.use("/registration", registrationRouter);

// // Use items routes
app.use("/item", itemsRouter);

// Use the user routes
app.use('/api', userRouter);

app.use("/images", express.static('uploads'))

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
