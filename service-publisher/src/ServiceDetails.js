// src/ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material';

// Sample services data with corresponding images
const services = [
  { id: 1, name: 'Appointment', image: 'https://source.unsplash.com/random/50x50?appointment' },
  { id: 2, name: 'ID Issue', image: 'https://source.unsplash.com/random/50x50?id' },
  { id: 3, name: 'Sports', image: 'https://source.unsplash.com/random/50x50?sports' },
  { id: 4, name: 'Food', image: 'https://source.unsplash.com/random/50x50?food' },
  { id: 5, name: 'Others', image: 'https://source.unsplash.com/random/50x50?services' },
];

export default function ServiceDetails() {
  const { id } = useParams(); // Get the user ID from the URL

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <AppBar position="fixed">
        <Toolbar>
          <div className="service-tweet">
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" /> {/* {{ edit_1 }} */}
            <div className="service-content">
              <Typography variant="h6">Service Details for User {id}</Typography>
              <Typography variant="body2">This is a brief description of the service.</Typography>
              <div className="service-actions">
                <Button variant="outlined">Like</Button>
                <Button variant="outlined">Comment</Button>
                <Button variant="outlined">Share</Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ p: 3, pt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Services Provided
        </Typography>

        {/* List of services styled like a telephone directory */}
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
          {services.map((service) => (
            <ListItem key={service.id}>
              {/* Service Image */}
              <ListItemAvatar>
                <Avatar src={service.image} alt={service.name} />
              </ListItemAvatar>

              {/* Service Name */}
              <ListItemText
                primary={service.name}
                primaryTypographyProps={{ variant: 'h6' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ p: 2, backgroundColor: '#f5f5f5', width: '100%', mt: 'auto', textAlign: 'center' }}
      >
        <Typography variant="body2">© 2024 Services Publisher - All Rights Reserved | License Info</Typography>
      </Box>
    </Box>
  );
}
