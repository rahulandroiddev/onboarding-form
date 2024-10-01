import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoChat from './components/VideoChat';
import Room from './components/Rooms';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoChat />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;