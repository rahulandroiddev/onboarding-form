// src/pages/ServiceDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';

const ServiceDetail = () => {
  const { id } = useParams();
  const { services, subscribeService } = useContext(ServiceContext);
  const service = services[id];

  const handleSubscribe = () => {
    subscribeService(service.title);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-4">{service.description}</p>
      <p className="text-green-600 font-bold mb-4">₹{service.price}</p>
      <button
        onClick={handleSubscribe}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Subscribe
      </button>
    </div>
  );
};

export default ServiceDetail;
