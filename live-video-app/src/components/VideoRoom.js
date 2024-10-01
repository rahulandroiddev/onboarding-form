import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
import { Box, Typography } from '@mui/material';

const videoFeeds = [
  { id: 1, title: 'Anjali Sharma', description: 'Beautiful Banarasi Sarees', src: 'https://www.w3schools.com/html/mov_bbb.mp4', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', shopName: 'Anjali Saree Center', address: '123 Varanasi Street, Varanasi' },
  { id: 2, title: 'Ravi Kumar', description: 'Exclusive Silk Sarees', src: 'https://www.w3schools.com/html/movie.mp4', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', shopName: 'Ravi Silk House', address: '456 Varanasi Lane, Varanasi' },
  { id: 3, title: 'Priya Singh', description: 'Designer Sarees Collection', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', shopName: 'Priya Saree Emporium', address: '789 Varanasi Road, Varanasi' },
  { id: 4, title: 'Amit Patel', description: 'Traditional Banarasi Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', shopName: 'Amit Saree Palace', address: '101 Varanasi Avenue, Varanasi' },
  { id: 5, title: 'Neha Gupta', description: 'Handloom Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', shopName: 'Neha Handloom Sarees', address: '202 Varanasi Boulevard, Varanasi' },
  { id: 6, title: 'Rajesh Mehta', description: 'Exclusive Wedding Sarees', src: 'https://www.w3schools.com/html/mov_bbb.mp4', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', shopName: 'Rajesh Wedding Sarees', address: '303 Varanasi Plaza, Varanasi' },
  { id: 7, title: 'Suman Verma', description: 'Designer Silk Sarees', src: 'https://www.w3schools.com/html/movie.mp4', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', shopName: 'Suman Silk Sarees', address: '404 Varanasi Street, Varanasi' },
  { id: 8, title: 'Vikram Singh', description: 'Traditional Handloom Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/8.jpg', shopName: 'Vikram Handloom Sarees', address: '505 Varanasi Lane, Varanasi' },
  { id: 9, title: 'Kavita Joshi', description: 'Exclusive Banarasi Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/9.jpg', shopName: 'Kavita Saree Center', address: '606 Varanasi Road, Varanasi' },
  { id: 10, title: 'Arjun Reddy', description: 'Designer Wedding Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', shopName: 'Arjun Wedding Sarees', address: '707 Varanasi Avenue, Varanasi' },
  { id: 11, title: 'Meera Nair', description: 'Handloom Silk Sarees', src: 'https://www.w3schools.com/html/mov_bbb.mp4', avatar: 'https://randomuser.me/api/portraits/women/11.jpg', shopName: 'Meera Silk Sarees', address: '808 Varanasi Boulevard, Varanasi' },
  { id: 12, title: 'Suresh Iyer', description: 'Exclusive Designer Sarees', src: 'https://www.w3schools.com/html/movie.mp4', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', shopName: 'Suresh Designer Sarees', address: '909 Varanasi Plaza, Varanasi' },
  { id: 13, title: 'Pooja Desai', description: 'Traditional Banarasi Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/13.jpg', shopName: 'Pooja Saree Emporium', address: '1010 Varanasi Street, Varanasi' },
  { id: 14, title: 'Rohan Malhotra', description: 'Designer Silk Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', shopName: 'Rohan Silk House', address: '1111 Varanasi Lane, Varanasi' },
  { id: 15, title: 'Shreya Kapoor', description: 'Exclusive Handloom Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/15.jpg', shopName: 'Shreya Handloom Sarees', address: '1212 Varanasi Road, Varanasi' },
  { id: 16, title: 'Manish Jain', description: 'Traditional Wedding Sarees', src: 'https://www.w3schools.com/html/mov_bbb.mp4', avatar: 'https://randomuser.me/api/portraits/men/16.jpg', shopName: 'Manish Wedding Sarees', address: '1313 Varanasi Avenue, Varanasi' },
  { id: 17, title: 'Aarti Rao', description: 'Designer Banarasi Sarees', src: 'https://www.w3schools.com/html/movie.mp4', avatar: 'https://randomuser.me/api/portraits/women/17.jpg', shopName: 'Aarti Saree Center', address: '1414 Varanasi Boulevard, Varanasi' },
  { id: 18, title: 'Nikhil Sharma', description: 'Exclusive Silk Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/18.jpg', shopName: 'Nikhil Silk Sarees', address: '1515 Varanasi Plaza, Varanasi' },
  { id: 19, title: 'Sneha Reddy', description: 'Handloom Designer Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4', avatar: 'https://randomuser.me/api/portraits/women/19.jpg', shopName: 'Sneha Handloom Sarees', address: '1616 Varanasi Street, Varanasi' },
  { id: 20, title: 'Rahul Khanna', description: 'Traditional Banarasi Sarees', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4', avatar: 'https://randomuser.me/api/portraits/men/20.jpg', shopName: 'Rahul Saree Emporium', address: '1717 Varanasi Lane, Varanasi' },
];

function VideoRoom() {
  const { id } = useParams();
  const feed = videoFeeds.find(feed => feed.id === parseInt(id));

  if (!feed) {
    return <Typography variant="h6">Video feed not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{feed.title}</Typography>
      <video src={feed.src} controls autoPlay style={{ width: '100%' }} />
      <Chat roomId={id} />
    </Box>
  );
}

export default VideoRoom;