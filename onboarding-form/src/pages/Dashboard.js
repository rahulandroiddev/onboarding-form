import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [chartData, setChartData] = useState(null); // Initialize as null to check if data is set

  const fetchClientData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/clients');
      const result = await response.json();
      console.log('Fetched data:', result); // Debugging log
      if (result.success) {
        const companies = result.data.map(client => client.company);
        const memberships = result.data.map(client => client.membership);

        const data = {
          labels: companies,
          datasets: [
            {
              label: 'Membership',
              data: memberships,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

        console.log('Chart data:', data); // Debugging log
        setChartData(data);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error fetching client data:', error);
    }
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="container.lg" p={4}>
        <Heading size="lg" mb={4} textAlign="left">Dashboard</Heading>
        <Box w="full">
          {chartData ? (
            <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
          ) : (
            <p>Loading...</p> // Show a loading message while data is being fetched
          )}
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Dashboard;