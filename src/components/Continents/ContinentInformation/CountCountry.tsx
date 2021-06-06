import { Box, Text } from '@chakra-ui/react';

export function CountCountry(): JSX.Element {
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        50
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        países
      </Text>
    </Box>
  );
}
