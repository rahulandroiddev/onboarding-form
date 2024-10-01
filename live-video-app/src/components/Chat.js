import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
import { Box, Typography } from '@mui/material';

const videoFeeds = [
  { id: 1, title: 'Presenter 1', src: 'video1.mp4' },
  { id: 2, title: 'Presenter 2', src: 'video2.mp4' },
  // Add more video feeds as needed
];

function VideoRoom() {
  const { id } = useParams();
  const feed = videoFeeds.find(feed => feed.id === parseInt(id));

  return (
    <Box>
      <Typography variant="h4">{feed.title}</Typography>
      <video src={feed.src} controls autoPlay style={{ width: '100%' }} />
      <Chat roomId={id} />
    </Box>
  );
}

export default VideoRoom;