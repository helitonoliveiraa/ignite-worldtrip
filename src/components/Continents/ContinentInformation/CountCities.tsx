import { Box, Text } from '@chakra-ui/react';

type CountCitiesProps = {
  quantityCities: string;
};

export function CountCities({ quantityCities }: CountCitiesProps): JSX.Element {
  return (
    <Box>
      <Text
        textAlign={['left', 'center']}
        fontSize={['2xl', '5xl']}
        fontWeight={600}
        color="red.700"
      >
        {quantityCities}
      </Text>
      <Text fontSize={['xl', '2xl']} fontWeight={[400, 600]}>
        cidades +100
      </Text>
    </Box>
  );
}
