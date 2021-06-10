import { Box, Text } from '@chakra-ui/react';

type CountCitiesProps = {
  quantityCities: string;
};

export function CountCities({ quantityCities }: CountCitiesProps): JSX.Element {
  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        {quantityCities}
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        cidades +100
      </Text>
    </Box>
  );
}
