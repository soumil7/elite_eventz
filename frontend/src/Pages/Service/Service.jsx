import React, { useState } from 'react';
import './Service.css';
import { planningContent, executionContent, closureContent } from '../../assets/assets';

const Service = () => {
  const [activeService, setActiveService] = useState('Planning');

  const renderContent = () => {
    let content = [];
    switch (activeService) {
      case 'Planning':
        content = planningContent;
        break;
      case 'Execution':
        content = executionContent;
        break;
      case 'Closure':
        content = closureContent;
        break;
      default:
        break;
    }

    return (
      <div className="content">
        {content.map((item, index) => (
          <div className="content-item" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="services">
      <div className="buttons">
        <button onClick={() => setActiveService('Planning')}>Planning</button>
        <button onClick={() => setActiveService('Execution')}>Execution</button>
        <button onClick={() => setActiveService('Closure')}>Closure</button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Service;
