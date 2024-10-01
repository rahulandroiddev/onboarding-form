import React from 'react';
import { ChakraProvider, Box, Text, Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box bg="blue.500" p={4} color="white">
          <Box display="flex" justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto">
            <Text fontSize="xl" fontWeight="bold">WebSocket Messaging</Text>
            <Box>
              <Button as={Link} to="/" colorScheme="teal" mr={4}>Admin</Button>
              <Button as={Link} to="/user" colorScheme="orange">User</Button>
            </Box>
          </Box>
        </Box>

        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
