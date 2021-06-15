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
        textAlign={['left', 'center']}
        fontSize={['2xl', '5xl']}
        fontWeight={600}
        color="red.700"
      >
        {quantityCountry}
      </Text>
      <Text fontSize={['xl', '2xl']} fontWeight={[400, 600]}>
        países
      </Text>
    </Box>
  );
}
