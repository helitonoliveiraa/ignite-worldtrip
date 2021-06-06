import { Box, Text } from '@chakra-ui/react';

export function CountCities(): JSX.Element {
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        27
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        cidades +100
      </Text>
    </Box>
  );
}
