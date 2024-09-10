import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Conference'
    });
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Create form data
        const payload = {
            name: data.name,
            description: data.description,
            price: Number(data.price),
            category: data.category,
            // If you need to send the image URL or name, you can include it here
            // Otherwise, handle image upload separately
            image: image ? URL.createObjectURL(image) : null
        };

        try {
            const response = await axios.post(`${url}/item/items`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setLoading(false);
            if (response.data.success) {
                //toast.success(response.data.message);
                // Reset form
                setData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Conference'
                });
                setImage(null);
            } else {
                //toast.error(response.data.message);
            }
        } catch (error) {
            setLoading(false);
            //toast.error('Error while adding event');
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className='add'>
            <h2>Add Event</h2>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload Preview" />
                    </label>
                    <input
                        onChange={handleImageChange}
                        type="file"
                        id='image'
                        hidden
                    />
                </div>

                <label className="add-event-name flex-col">
                    Event Name:
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        name='name'
                        placeholder='Type here'
                        required
                    />
                </label>

                <label className="add-event-description flex-col">
                    Event Description:
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name="description"
                        rows='6'
                        placeholder='Write content here'
                        required
                    ></textarea>
                </label>

                <div className="add-category-price">
                    <label className="add-category flex-col">
                        Event Category:
                        <select
                            onChange={onChangeHandler}
                            name="category"
                            value={data.category}
                        >
                            <option value="Conference">Conference</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Seminar">Seminar</option>
                            <option value="Webinar">Webinar</option>
                            <option value="Meetup">Meetup</option>
                            <option value="Networking">Networking</option>
                        </select>
                    </label>

                    <label className="add-price flex-col">
                        Event Price:
                        <input
                            onChange={onChangeHandler}
                            value={data.price}
                            type="number"
                            name='price'
                            placeholder='$20'
                            required
                        />
                    </label>
                </div>

                <button type='submit' className='add-btn' disabled={loading}>
                    {loading ? 'Adding Event...' : 'ADD EVENT'}
                </button>
            </form>
        </div>
    );
};

export default Add;
