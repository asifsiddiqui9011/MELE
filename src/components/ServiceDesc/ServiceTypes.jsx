import React from 'react';
import './serviceTypes.css';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className="type-container">
      <div className="service-heading">
        <h1>{title}</h1>
      </div>
      <div className="type-desc">
        
        <p>{description}</p>
        {/* <h2 className='font-semibold mt-2 '>Key Features</h2>
        {features && features.length > 0 && ( // Conditional rendering for the features list
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default ServiceCard;
