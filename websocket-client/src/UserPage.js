import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem, Avatar, HStack, Grid, Image, Center, Alert } from '@chakra-ui/react';
import QrScanner from 'react-qr-scanner';

export default function UserPage() {
  const [messages, setMessages] = useState([]);
  const [qrCodeScanned, setQrCodeScanned] = useState(false);  // Track if QR code is scanned
  const [qrCodeData, setQrCodeData] = useState(null);  // Data from the QR code
  const [cameraError, setCameraError] = useState(false);  // Track camera issues

  useEffect(() => {
    if (qrCodeScanned) {
      const socket = new WebSocket('ws://localhost:8080');

      socket.onmessage = (event) => {
        if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => {
            const messageText = reader.result;
            setMessages((prevMessages) => [...prevMessages, messageText]);
          };
          reader.readAsText(event.data);
        } else {
          setMessages((prevMessages) => [...prevMessages, event.data]);
        }
      };

      return () => {
        socket.close();
      };
    }
  }, [qrCodeScanned]);

  const handleScan = (data) => {
    if (data) {
      setQrCodeData(data);  // Capture the QR code data
      setQrCodeScanned(true);  // QR code has been scanned successfully
    }
  };

  const handleError = (err) => {
    console.error(err);
    setCameraError(true);  // Set camera error state if `getUserMedia` fails
  };

  const previewStyle = {
    height: 240,
    width: '100%',
  };

  return (
    <Box maxW="900px" mx="auto" mt={10} p={5} borderWidth="1px" borderRadius="lg" boxShadow="md">
      {!qrCodeScanned ? (
        <Box textAlign="center">
          <Text fontSize="2xl" mb={5}>Search QR Code</Text>
          {!cameraError ? (
            <QrScanner
              delay={300}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
          ) : (
            <Alert status="error" mt={5}>
              <Text>Camera access is not available. Please check browser permissions or use a supported browser.</Text>
            </Alert>
          )}
          <Text mt={5} color="gray.500">Please scan the QR code to load the ticket details.</Text>
        </Box>
      ) : (
        <>
          {/* Funky Ticket UI */}
          <Box
            p={4}
            borderWidth="2px"
            borderColor="yellow.400"
            borderRadius="lg"
            bgGradient="linear(to-r, blue.200, yellow.100, brown.200)"
            boxShadow="lg"
            mb={5}
          >
            <Grid templateColumns="repeat(3, 1fr)" gap={4} alignItems="center">
              {/* Left Side: Ticket Details */}
              <Box>
                <Text fontSize="xl" fontWeight="bold" color="brown.700">Ticket No:</Text>
                <Text fontSize="3xl" fontWeight="bold" color="yellow.600">ABC123456</Text>
                <Text fontSize="md" fontWeight="bold" color="blue.600" mt={4}>Car Model:</Text>
                <Text fontSize="lg" color="yellow.600">Tesla Model X</Text>
                <Text fontSize="md" fontWeight="bold" color="blue.600" mt={4}>Time:</Text>
                <Text fontSize="lg" color="yellow.600">12:45 PM</Text>
              </Box>

              {/* Middle: Car Image */}
              <Center>
                <Image
                  src="https://i.ytimg.com/vi/MSP34_kFakU/hq720.jpg"
                  alt="Car Image"
                  boxSize="150px"
                  borderRadius="full"
                  border="4px solid yellow.400"
                  boxShadow="md"
                />
              </Center>

              {/* Right Side: Waiting Time */}
              <Box textAlign="right">
                <Text fontSize="xl" fontWeight="bold" color="brown.700">Waiting Time:</Text>
                <Text fontSize="3xl" fontWeight="bold" color="yellow.600">5 min</Text>
                <Text fontSize="md" fontWeight="bold" color="blue.600" mt={4}>Arrival In:</Text>
                <Text fontSize="lg" color="yellow.600">10 min</Text>
              </Box>
            </Grid>
          </Box>

          {/* Aligned List with User Avatar */}
          <List spacing={3}>
            {messages.map((msg, index) => (
              <ListItem key={index}>
                <HStack spacing={4}>
                  {/* User Avatar */}
                  <Avatar src="https://i.pravatar.cc/150?img=7" alt="User Avatar" />

                  {/* Message Content */}
                  <Box p={3} borderWidth="1px" borderRadius="md" w="full" bg="gray.100">
                    <Text>{msg}</Text>
                  </Box>
                </HStack>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
