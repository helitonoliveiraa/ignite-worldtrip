import { Box, Text } from '@chakra-ui/react';

type CountCountryProps = {
  quantityCountry: string;
};

export function CountCountry({
  quantityCountry,
}: CountCountryProps): JSX.Element {
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        {quantityCountry}
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        países
      </Text>
    </Box>
  );
}
