import { Box, Text } from '@chakra-ui/react';

type CountLanguagesProps = {
  quantityLanquages: string;
};

export function CountLanguages({
  quantityLanquages,
}: CountLanguagesProps): JSX.Element {
  return (
    <Box>
      <Text
        textAlign={['left', 'center']}
        fontSize={['2xl', '5xl']}
        fontWeight={600}
        color="red.700"
      >
        {quantityLanquages}
      </Text>
      <Text fontSize={['xl', '2xl']} fontWeight={[400, 600]}>
        línguas
      </Text>
    </Box>
  );
}
