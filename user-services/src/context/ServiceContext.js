// src/context/ServiceContext.js
import React, { createContext, useState } from 'react';

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  // Function to add a new service
  const addService = (service) => {
    setServices([...services, service]);
  };

  // Function to subscribe to a service
  const subscribeService = (serviceTitle) => {
    setSubscriptions([...subscriptions, serviceTitle]);
    alert(`Subscribed to ${serviceTitle}`);
  };

  return (
    <ServiceContext.Provider
      value={{ services, addService, subscribeService }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
