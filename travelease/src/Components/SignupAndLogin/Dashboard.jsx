import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import './Dashboard.css';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Replace with your data fetching logic
    const fetchProperties = async () => {
      // In a real application, fetch data from backend
      const mockProperties = [
        {
          id: 1,
          title: 'Cozy Apartment',
          description: 'A nice and cozy apartment in the city center.',
          location: 'New York, USA',
          price: 120,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Luxury Villa',
          description: 'A luxurious villa with a stunning view.',
          location: 'Los Angeles, USA',
          price: 450,
          image: 'https://via.placeholder.com/150',
        },
        // Add more properties as needed
      ];
      setProperties(mockProperties);
    };

    fetchProperties();
  }, []);

  return (
    <div className="dashboard">
      <h1>Available Properties</h1>
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

