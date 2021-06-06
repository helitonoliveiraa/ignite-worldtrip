import { Box, Text } from '@chakra-ui/react';

export function CountLanguages(): JSX.Element {
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        60
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        línguas
      </Text>
    </Box>
  );
}
