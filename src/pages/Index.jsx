import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Fitness Tracker</Heading>
        <Text fontSize="lg">Track your workouts, monitor your progress, and stay motivated!</Text>
        <Box boxSize="sm">
          <Image src="/images/fitness-hero.jpg" alt="Fitness Hero" />
        </Box>
        <Button as={Link} to="/dashboard" colorScheme="teal" size="lg">Get Started</Button>
        <Button as={Link} to="/log-workout" colorScheme="teal" size="lg">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default Index;