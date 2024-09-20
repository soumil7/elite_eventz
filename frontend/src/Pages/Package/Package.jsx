import React from 'react';
import './Package.css';
import { events } from '../../assets/assets';

const Package = () => {
  return (
    <div className="events-offered" id="events-offered">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.src} alt={event.alt} className="event-image" />
          <div className="event-caption">{event.caption}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Package;
