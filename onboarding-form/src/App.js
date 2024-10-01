import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Onboard from './pages/Onboard';
import AllClients from './pages/AllClients';
import Dashboard from './pages/Dashboard';
import GenerateQRCode from './pages/GenerateQRCode';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex direction="column" minH="100vh">
          {/* Header at the top */}
          <Header />

          <Flex flex="1" direction="row">
            {/* Menu on the left */}
            <Menu />

            {/* Main content area */}
            <Box flex="1" p={4}>
              <Routes>
                <Route path="/onboard" element={<Onboard />} />
                <Route path="/clients" element={<AllClients />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/generate-qr" element={<GenerateQRCode />} />
                <Route path="/testimonials" element={<Testimonials />} />
              </Routes>
            </Box>
          </Flex>

          {/* Footer at the bottom */}
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
