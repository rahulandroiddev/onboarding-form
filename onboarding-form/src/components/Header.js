import { Box, Flex, Heading, Spacer, Image } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <Box as="header" bg="#FF6969" p={4} color="#4A4947">
      <Flex  justifyContent="space-around">
        <Image src="data:image/png;base64,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" alt="Logo" boxSize="50px" />
        <Heading size="lg" textAlign="center" flex="1">Vallet Admin - Jaypee Resorts</Heading>
        <FaUserCircle size="30px" />
      </Flex>
    </Box>
  );
}

export default Header;
