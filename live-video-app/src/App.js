import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import VideoFeed from './components/VideoFeed';
import VideoRoom from './components/VideoRoom';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">India Saree World</Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<VideoFeed />} />
        <Route path="/room/:id" element={<VideoRoom />} />
      </Routes>
    </Router>
  );
}

export default App;