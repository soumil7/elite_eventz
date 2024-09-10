import React, { useEffect, useRef } from 'react';
import './EventScroll.css';
import { events } from '../../assets/assets';

const EventScroll = ({ images }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollStep = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };
    const intervalId = setInterval(scrollStep, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="event-image-scroll" ref={scrollContainerRef}>
      {events.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image.src} alt={image.alt} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default EventScroll;
