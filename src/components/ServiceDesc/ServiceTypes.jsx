import React from 'react';
import './ServiceTypes.css';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className="type-container">
      <div className="service-heading">
        <h1>{title}</h1>
      </div>
      <div className="type-desc"> 
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
