// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, CssBaseline, Container, Grid, Card, CardContent, CardMedia, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

// Dummy user data
const users = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St, Springfield, IL",
    company: "Tech Solutions",
    image: "https://source.unsplash.com/random/400x300?person"
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "456 Oak Ave, Springfield, IL",
    company: "Innovate Corp",
    image: "https://source.unsplash.com/random/400x300?businesswoman"
  },
  {
    id: 3,
    name: "Mike Johnson",
    address: "789 Pine St, Springfield, IL",
    company: "Creative Minds",
    image: "https://source.unsplash.com/random/400x300?man"
  }
];

const drawerWidth = 240;

function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Header */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Services Publisher
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Menu) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
        <Container>
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Link to={`/service-details/${user.id}`} style={{ textDecoration: 'none' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={user.image}
                      alt={user.name}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.address}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Company: {user.company}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ p: 2, backgroundColor: '#f5f5f5', width: '100%', mt: 'auto', textAlign: 'center', position: 'fixed', bottom: 0 }}
      >
        <Typography variant="body2">
          © 2024 Services Publisher - All Rights Reserved | License Info
        </Typography>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
      </Routes>
    </Router>
  );
}
