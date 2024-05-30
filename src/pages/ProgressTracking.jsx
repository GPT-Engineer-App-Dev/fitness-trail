import { useState, useEffect } from "react";
import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressTracking = () => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    // Fetch workout data from backend or local storage
    const data = [
      { date: "2023-01-01", duration: 30 },
      { date: "2023-01-02", duration: 45 },
      { date: "2023-01-03", duration: 60 },
      // Add more data points as needed
    ];
    setWorkoutData(data);
  }, []);

  const chartData = {
    labels: workoutData.map((workout) => workout.date),
    datasets: [
      {
        label: "Workout Duration (minutes)",
        data: workoutData.map((workout) => workout.duration),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Progress Tracking</Heading>
        <Box width="100%">
          <Line data={chartData} />
        </Box>
      </VStack>
    </Container>
  );
};

export default ProgressTracking;