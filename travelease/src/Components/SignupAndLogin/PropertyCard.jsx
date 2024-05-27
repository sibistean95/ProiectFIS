import React from 'react';
import './PropertyCard.css'; // You can create this CSS file to style your property card

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-details">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p>Location: {property.location}</p>
        <p>Price: ${property.price} per night</p>
      </div>
    </div>
  );
};

export default PropertyCard;