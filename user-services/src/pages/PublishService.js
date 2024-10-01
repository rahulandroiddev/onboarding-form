// src/pages/PublishService.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';

const PublishService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { addService } = useContext(ServiceContext);
  const navigate = useNavigate();

  const handlePublish = () => {
    addService({ title, description, price });
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Publish a New Service</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Service Title</label>
        <input
          type="text"
          className="border w-full p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Service Description</label>
        <textarea
          className="border w-full p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price (INR)</label>
        <input
          type="number"
          className="border w-full p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button
        onClick={handlePublish}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
    </div>
  );
};

export default PublishService;
