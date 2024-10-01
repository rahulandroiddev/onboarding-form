import React, { useState } from 'react';
import { VStack, Heading, Text, Box, Button, Input } from '@chakra-ui/react';

function Onboard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    users: '',
    membership: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    console.log('Submitting form data:', formData); // Log the form data
    try {
      const response = await fetch('http://localhost:5000/api/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Onboarding successful');
        setTableData([...tableData, formData]); // Add new data to the table
      } else {
        console.error('Onboarding failed:', data.message);
      }
    } catch (error) {
      console.error('Error onboarding:', error);
    }
  };

  return (
    <VStack spacing={4} w="full" align="flex-start">
      <Heading size="lg">Onboard New Client</Heading>
      <Input
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        size="lg"
      />
      <Input
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        size="lg"
      />
      <Input
        placeholder="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        size="lg"
      />
      <Input
        placeholder="Users"
        name="users"
        value={formData.users}
        onChange={handleChange}
        size="lg"
      />
      <Input
        placeholder="Membership"
        name="membership"
        value={formData.membership}
        onChange={handleChange}
        size="lg"
      />
      <Button colorScheme="teal" size="lg" w="full" onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  );
}

export default Onboard;