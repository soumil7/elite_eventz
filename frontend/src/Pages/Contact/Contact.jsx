import React from 'react';
import './Contact.css'; // Ensure this file exists for styling
import RegistrationComponent from '../../Components/RegistrationComponent/RegsitrationComponent';

const Contact = () => {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Welcome to ELITE Event Management</h1>
                <p>Your trusted partner for flawless events!</p>
            </header>
            <section className="company-info">
                <h2>About Us</h2>
                <p>
                    ELITE Event Management specializes in crafting unforgettable experiences
                    tailored to your needs. Our dedicated team excels in organizing and executing
                    a wide range of events, from corporate functions to personal celebrations.
                    We handle every detail to ensure your event is memorable and flawlessly executed.
                </p>
            </section>
            <section className="contact-details">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="info-item">
                        <strong>Email:</strong> <a href="mailto:contact@eliteevents.com">contact@eliteevents.com</a>
                    </div>
                    <div className="info-item">
                        <strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </div>
                    <div className="info-item">
                        <strong>Address:</strong> 123 Event Lane, Suite 456, Cityville, ST 78910
                    </div>
                    <div className="info-item">
                        <strong>Business Hours:</strong> Mon-Fri: 9 AM - 6 PM | Sat: 10 AM - 4 PM
                    </div>
                </div>
            </section>
            <section className="services">
                <h2>Our Services</h2>
                <ul>
                    <li><strong>Corporate Events:</strong> Professional management of conferences, seminars, and meetings.</li>
                    <li><strong>Private Celebrations:</strong> Tailored events for weddings, anniversaries, and more.</li>
                    <li><strong>Product Launches:</strong> Innovative and impactful launch events for your brand.</li>
                    <li><strong>Fundraising Events:</strong> Expert planning for successful charity events.</li>
                    <li><strong>Event Consulting:</strong> Strategic advice and planning to ensure event success.</li>
                </ul>
            </section>
            <RegistrationComponent></RegistrationComponent>
        </div>
    );
};

export default Contact;
