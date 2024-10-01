import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Avatar, Box, IconButton } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';

const videoFeeds = [
  { id: 1, title: 'Anjali Sharma', description: 'Beautiful Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', shopName: 'Anjali Saree Center', address: '123 Varanasi Street, Varanasi', timing: '10:00 - 15:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 2, title: 'Ravi Kumar', description: 'Exclusive Silk Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', shopName: 'Ravi Silk House', address: '456 Varanasi Lane, Varanasi', timing: '11:00 - 16:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 3, title: 'Priya Singh', description: 'Designer Sarees Collection', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', shopName: 'Priya Saree Emporium', address: '789 Varanasi Road, Varanasi', timing: '12:00 - 17:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 4, title: 'Amit Patel', description: 'Traditional Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', shopName: 'Amit Saree Palace', address: '101 Varanasi Avenue, Varanasi', timing: '13:00 - 18:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 5, title: 'Neha Gupta', description: 'Handloom Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', shopName: 'Neha Handloom Sarees', address: '202 Varanasi Boulevard, Varanasi', timing: '14:00 - 19:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 6, title: 'Rajesh Mehta', description: 'Exclusive Wedding Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/6.jpg', shopName: 'Rajesh Wedding Sarees', address: '303 Varanasi Plaza, Varanasi', timing: '15:00 - 20:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 7, title: 'Suman Verma', description: 'Designer Silk Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', shopName: 'Suman Silk Sarees', address: '404 Varanasi Street, Varanasi', timing: '16:00 - 21:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 8, title: 'Vikram Singh', description: 'Traditional Handloom Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/8.jpg', shopName: 'Vikram Handloom Sarees', address: '505 Varanasi Lane, Varanasi', timing: '17:00 - 22:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 9, title: 'Kavita Joshi', description: 'Exclusive Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/9.jpg', shopName: 'Kavita Saree Center', address: '606 Varanasi Road, Varanasi', timing: '18:00 - 23:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 10, title: 'Arjun Reddy', description: 'Designer Wedding Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/10.jpg', shopName: 'Arjun Wedding Sarees', address: '707 Varanasi Avenue, Varanasi', timing: '19:00 - 00:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 11, title: 'Meera Nair', description: 'Handloom Silk Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/11.jpg', shopName: 'Meera Silk Sarees', address: '808 Varanasi Boulevard, Varanasi', timing: '20:00 - 01:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 12, title: 'Suresh Iyer', description: 'Exclusive Designer Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/12.jpg', shopName: 'Suresh Designer Sarees', address: '909 Varanasi Plaza, Varanasi', timing: '21:00 - 02:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 13, title: 'Pooja Desai', description: 'Traditional Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/13.jpg', shopName: 'Pooja Saree Emporium', address: '1010 Varanasi Street, Varanasi', timing: '22:00 - 03:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 14, title: 'Rohan Malhotra', description: 'Designer Silk Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/14.jpg', shopName: 'Rohan Silk House', address: '1111 Varanasi Lane, Varanasi', timing: '23:00 - 04:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 15, title: 'Shreya Kapoor', description: 'Exclusive Handloom Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/15.jpg', shopName: 'Shreya Handloom Sarees', address: '1212 Varanasi Road, Varanasi', timing: '00:00 - 05:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 16, title: 'Manish Jain', description: 'Traditional Wedding Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/16.jpg', shopName: 'Manish Wedding Sarees', address: '1313 Varanasi Avenue, Varanasi', timing: '01:00 - 06:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 17, title: 'Aarti Rao', description: 'Designer Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/17.jpg', shopName: 'Aarti Saree Center', address: '1414 Varanasi Boulevard, Varanasi', timing: '02:00 - 07:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 18, title: 'Nikhil Sharma', description: 'Exclusive Silk Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/18.jpg', shopName: 'Nikhil Silk Sarees', address: '1515 Varanasi Plaza, Varanasi', timing: '03:00 - 08:00 IST', priceRange: '₹6000 - ₹12000' },
  { id: 19, title: 'Sneha Reddy', description: 'Handloom Designer Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/women/19.jpg', shopName: 'Sneha Handloom Sarees', address: '1616 Varanasi Street, Varanasi', timing: '04:00 - 09:00 IST', priceRange: '₹1000 - ₹5000' },
  { id: 20, title: 'Rahul Khanna', description: 'Traditional Banarasi Sarees', src: 'https://www.youtube.com/embed/Z_YqmzwyXZE', avatar: 'https://randomuser.me/api/portraits/men/20.jpg', shopName: 'Rahul Saree Emporium', address: '1717 Varanasi Lane, Varanasi', timing: '05:00 - 10:00 IST', priceRange: '₹6000 - ₹12000' },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function VideoFeed() {
  return (
    <Grid container spacing={3} style={{ padding: 24 }}>
      {videoFeeds.map(feed => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={feed.id}>
          <Card>
            <CardMedia
              component="iframe"
              src={feed.src}
              title={feed.title}
              style={{ height: 140 }}
            />
            <CardContent style={{ height: 220 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar src={feed.avatar} alt={feed.title} style={{ marginRight: 8 }} />
                <Typography variant="h6" noWrap>{feed.title}</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" noWrap>
                {feed.shopName}
              </Typography>
              <Box display="flex" alignItems="center">
                <IconButton
                  component="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(feed.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  style={{ marginRight: 8 }}
                >
                  <MapIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary" noWrap>
                  {feed.address}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <AccessTimeIcon fontSize="small" style={{ marginRight: 4 }} />
                <Typography variant="body2" color="textSecondary" noWrap>
                  Timing: {feed.timing}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <AttachMoneyIcon fontSize="small" style={{ marginRight: 4 }} />
                <Typography variant="body2" color="textSecondary" noWrap>
                  Price Range: {feed.priceRange}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                <Box display="flex" alignItems="center">
                  <FavoriteIcon fontSize="small" style={{ marginRight: 4 }} />
                  <Typography variant="body2" color="textSecondary">
                    {getRandomNumber(100, 1000)}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <CommentIcon fontSize="small" style={{ marginRight: 4 }} />
                  <Typography variant="body2" color="textSecondary">
                    {getRandomNumber(10, 100)}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <ShareIcon fontSize="small" style={{ marginRight: 4 }} />
                  <Typography variant="body2" color="textSecondary">
                    {getRandomNumber(10, 100)}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <StarIcon fontSize="small" style={{ marginRight: 4 }} />
                  <Typography variant="body2" color="textSecondary">
                    {getRandomNumber(1, 5)}
                  </Typography>
                </Box>
              </Box>
              <Link to={`/room/${feed.id}`}>Join Room</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default VideoFeed;