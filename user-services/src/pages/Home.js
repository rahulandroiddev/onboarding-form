// src/pages/Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';

const Home = () => {
  const { services } = useContext(ServiceContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Services</h1>
      <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg max-w-2xl mx-auto"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <p className="text-green-600 font-bold mb-4">₹{service.price}</p>
            <Link
              to={`/service/${index}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
