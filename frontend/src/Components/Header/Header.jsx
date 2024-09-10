import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToEvents = (e) => {
    e.preventDefault();
    const eventsSection = document.getElementById('events-offered');
    if (eventsSection) {
      window.scrollTo({
        top: eventsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <button onClick={scrollToEvents}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
