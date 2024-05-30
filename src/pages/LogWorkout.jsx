import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LogWorkout = () => {
  const [date, setDate] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = { date, exerciseType, duration, notes };
    console.log("Workout logged:", workout);
    // Here you would typically send the workout data to a backend server
    navigate("/dashboard");
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl">Log Workout</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormControl>
          <FormControl id="exerciseType" isRequired>
            <FormLabel>Type of Exercise</FormLabel>
            <Input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} />
          </FormControl>
          <FormControl id="duration" isRequired>
            <FormLabel>Duration (minutes)</FormLabel>
            <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </FormControl>
          <FormControl id="notes">
            <FormLabel>Notes</FormLabel>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" mt={4} width="100%">Log Workout</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default LogWorkout;