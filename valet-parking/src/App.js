import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Card, CardContent, CardMedia, CircularProgress, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a pastel color theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#b3e5fc', // Pastel blue
    },
    secondary: {
      main: '#ffccbc', // Pastel peach
    },
    background: {
      default: '#fce4ec', // Pastel pink background
    },
  },
});

export default function App() {
  const [qrScanned, setQrScanned] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [carRequested, setCarRequested] = useState(false);
  const [carArrived, setCarArrived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to generate random time in the past for parked since
  const generateRandomTime = () => {
    const randomHoursAgo = Math.floor(Math.random() * 12); // Random 0-12 hours ago
    const randomMinutesAgo = Math.floor(Math.random() * 60); // Random 0-60 minutes ago
    const parkedTime = new Date();
    parkedTime.setHours(parkedTime.getHours() - randomHoursAgo);
    parkedTime.setMinutes(parkedTime.getMinutes() - randomMinutesAgo);
    return parkedTime;
  };

  // Simulate QR Code scan
  const handleScanQR = () => {
    const carNumber = "UP16CY5748";
    const parkedSince = generateRandomTime();
    const carImage = "https://i.ytimg.com/vi/MSP34_kFakU/hq720.jpg"; // Car image URL
    setCarDetails({ carNumber, parkedSince, carImage });
    setQrScanned(true);
    setCarRequested(false);
    setCarArrived(false);
  };

  // Calculate the parking fee based on time difference
  const calculateFee = () => {
    const now = new Date();
    const parkedTime = carDetails.parkedSince;
    const timeDiff = Math.abs(now - parkedTime) / (1000 * 60); // Time difference in minutes
    const hourlyRate = 10; // Rs 10 per hour
    const fee = Math.ceil(timeDiff / 60) * hourlyRate;
    return fee;
  };

  // Simulate Request Car Retrieval
  const handleRequestCar = () => {
    setCarRequested(true);
    setLoading(true);

    // Simulate car retrieval time (e.g., 5 seconds)
    setTimeout(() => {
      setCarArrived(true);
      setLoading(false);
      setOpenSnackbar(true); // Notify user the car has arrived
    }, 5000);
  };

  // Handle Snackbar close
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Header */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Valet Parking
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>

          {/* QR Scan Card */}
          <Card sx={{ minWidth: 300, mb: 3, backgroundColor: theme.palette.secondary.ligh}}>
            <CardContent>
              {!qrScanned ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    Scan QR Code
                  </Typography>
                  <Button variant="contained" color="primary" onClick={handleScanQR}>
                    Scan QR Code
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h5" gutterBottom>
                    Car Number: {carDetails.carNumber}
                  </Typography>
                  <Typography variant="body2">
                    Parked Since: {carDetails.parkedSince.toLocaleString()}
                  </Typography>

                  {/* Car Image */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={carDetails.carImage}
                    alt="Car Image"
                    sx={{ mt: 2 }}
                  />

                  {/* Request Car Button */}
                  {!carRequested && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleRequestCar}
                      sx={{ mt: 2 }}
                    >
                      Request Car (Fee: ₹{calculateFee()})
                    </Button>
                  )}

                  {/* Loading Spinner while fetching the car */}
                  {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                      <CircularProgress />
                    </Box>
                  )}

                  {/* Car Arrived Message */}
                  {carArrived && (
                    <div style={{ maxWidth: 300 }}> {/* {{ edit_1 }} */}
                    <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
                      Your car has arrived. You can now pick it up!
                    </Typography>
                    <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
                      The the parking Fee is 100 Rs for parking the car for 2 hrs 39 mins, kindly pay at the counter
                    </Typography>
                    <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
                      This fee is valid till 5 mins after the car arrives, after every 10 mins 50 rs will be added and if the car is not picked up in 20 mins it will again be parked, as we have limited parking at the gate, thanks!!!
                    </Typography>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </Box>

        {/* Snackbar notification when car arrives */}
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Your car is ready! You can now pick it up.
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}
