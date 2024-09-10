import React from 'react';
import './FeedBack.css';

const feedbackData = [
  { user: 'John Doe', feedback: 'Great service and friendly staff!' },
  { user: 'Jane Smith', feedback: 'Absolutely loved the event!' },
  { user: 'Alice Johnson', feedback: 'Well organized and fun.' },
  { user: 'Robert Brown', feedback: 'A memorable experience for all.' },
  // Add more feedback as needed
];

const FeedBack = () => {
  return (
    <div className="feedback-container">
      <div className="feedback-wrapper">
        <div className="feedback-slider">
          {feedbackData.map((item, index) => (
            <div key={index} className="feedback-card">
              <h3>{item.user}</h3>
              <p>{item.feedback}</p>
            </div>
          ))}
          {/* Duplicate the feedback data for seamless scrolling */}
          {feedbackData.map((item, index) => (
            <div key={index + feedbackData.length} className="feedback-card">
              <h3>{item.user}</h3>
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
