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
        textAlign="center"
        fontSize="5xl"
        fontWeight={600}
        color="yellow.500"
      >
        {quantityLanquages}
      </Text>
      <Text fontSize="2xl" fontWeight={600}>
        línguas
      </Text>
    </Box>
  );
}
