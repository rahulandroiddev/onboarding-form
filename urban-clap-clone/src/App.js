import React, { useState } from 'react';
import { AppBar, Toolbar, Container, TextField, Typography, Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { householdServices, travelServices } from './servicesData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHouseholdServices = householdServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTravelServices = travelServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const householdRows = [];
  for (let i = 0; i < filteredHouseholdServices.length; i += 5) {
    householdRows.push(filteredHouseholdServices.slice(i, i + 5));
  }

  const travelRows = [];
  for (let i = 0; i < filteredTravelServices.length; i += 5) {
    travelRows.push(filteredTravelServices.slice(i, i + 5));
  }

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            UrbanClap Clone
          </Typography>
          <TextField
            label="Search services..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ backgroundColor: 'white', borderRadius: 4 }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2} p={2} bgcolor="yellow" textAlign="center">
          <Typography variant="h6">
            Avail 50% discount till 31st Jan on the services
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" height="60vh">
          <Typography variant="h5" gutterBottom>
            Household Services
          </Typography>
          <Box width="40%" height="40%">
            <Table>
              <TableBody>
                {householdRows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map(service => (
                      <TableCell key={service.id} style={{ padding: 0, border: 'none' }}>
                        <Box textAlign="center" p={1}>
                          <img src={service.image} alt={service.name} style={{ width: '50px', height: '50px' }} />
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
        <Box my={2} p={2} bgcolor="lightblue" textAlign="center">
          <Typography variant="h6">
            Avail 20% discount on Travel Services
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" height="60vh">
          <Typography variant="h5" gutterBottom>
            Travel Services
          </Typography>
          <Box width="40%" height="40%">
            <Table>
              <TableBody>
                {travelRows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map(service => (
                      <TableCell key={service.id} style={{ padding: 0, border: 'none' }}>
                        <Box textAlign="center" p={1}>
                          <img src={service.image} alt={service.name} style={{ width: '50px', height: '50px' }} />
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;