// src/AdminPage.js
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Textarea, Text } from '@chakra-ui/react';

export default function AdminPage() {
  const [message, setMessage] = useState('');
  const wsRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    wsRef.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const handleBroadcast = () => {
    if (wsRef.current && message) {
      wsRef.current.send(message);
      setMessage('');
    }
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Text fontSize="2xl" mb={5} fontWeight="bold">Admin Panel - Broadcast a Message</Text>
      <Textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        size="md"
        mb={5}
      />
      <Button colorScheme="teal" onClick={handleBroadcast} isFullWidth>
        Broadcast Message
      </Button>
    </Box>
  );
}
