import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css'; // Optional: For custom styling

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        phonenumber: '',
        email: '',
        eventName: '',
        eventCategory: '',
        address: '',
        whatsappNumber: ''
    });

    const [loading, setLoading] = useState(false);  // To indicate loading status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const response = await axios.post('http://localhost:5000/registration/registrations/', formData);
            setLoading(false); // Stop loading after response
            if (response.data) {
                alert('Registration successful');
                setFormData({  // Clear the form
                    name: '',
                    phonenumber: '',
                    email: '',
                    eventName: '',
                    eventCategory: '',
                    address: '',
                    whatsappNumber: ''
                });
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            setLoading(false); // Stop loading on error
            console.error('Error submitting form:', error);
            alert('Error submitting form');
        }
    };

    return (
        <>
        <div className="top"></div>
        <div className="registration-form">
            <h2>Event Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Event Name:
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Event Category:
                    <input
                        type="text"
                        name="eventCategory"
                        value={formData.eventCategory}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    WhatsApp Number:
                    <input
                        type="text"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
        </>
    );
};

export default Registration;
