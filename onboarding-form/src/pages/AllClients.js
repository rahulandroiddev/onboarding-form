import React from 'react';
import { ChakraProvider, Box, Heading, Container, Table, Thead, Tbody, Tr, Th, Td, Flex, Select } from '@chakra-ui/react';

const clients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  // Add more client data here
];

function AllClients() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" p={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading>All Clients</Heading>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {clients.map((client) => (
              <Tr key={client.id}>
                <Td>{client.id}</Td>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>{client.phone}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </ChakraProvider>
  );
}

export default AllClients;