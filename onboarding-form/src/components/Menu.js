import { Box, List, ListItem, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <Box as="nav" bg="#FAF6F0" color="black" p={4} height="100vh" w="250px">
      <List spacing={4}>
        <ListItem>
          <Link as={NavLink} to="/onboard" _hover={{ textDecoration: 'none', bg: '#F4DFC8' }} p={2} borderRadius="md" display="block">
            Onboard New Clients
          </Link>
        </ListItem>

        <ListItem>
          <Link as={NavLink} to="/clients" _hover={{ textDecoration: 'none', bg: '#F4DFC8' }} p={2} borderRadius="md" display="block">
            All Clients
          </Link>
        </ListItem>

        <ListItem>
          <Link as={NavLink} to="/dashboard" _hover={{ textDecoration: 'none', bg: '#F4DFC8' }} p={2} borderRadius="md" display="block">
            Dashboard
          </Link>
        </ListItem>

        <ListItem>
          <Link as={NavLink} to="/generate-qr" _hover={{ textDecoration: 'none', bg: '#F4DFC8' }} p={2} borderRadius="md" display="block">
            Generate QR Codes
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/testimonials" _hover={{ textDecoration: 'none', bg: '#F4DFC8' }} p={2} borderRadius="md" display="block">
            Testimonials
          </Link>
        </ListItem>

      </List>
    </Box>
  );
}

export default Menu;
