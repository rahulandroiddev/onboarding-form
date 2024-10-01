import React from 'react';
import { Link } from 'react-router-dom';

const VideoChat = () => {
  const rooms = ['Room1', 'Room2', 'Room3']; // Example rooms

  return (
    <div>
      <h1>Video Chat Rooms</h1>
      <div>
        {rooms.map((room) => (
          <div key={room}>
            <Link to={`/room/${room}`}>{room}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoChat;