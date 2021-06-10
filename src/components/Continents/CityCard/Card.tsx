import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

type CardProps = {
  imgCountryURL: string;
  country: string;
  city: string;
  flagURL: string;
};

export function Card({
  imgCountryURL,
  country,
  city,
  flagURL,
}: CardProps): JSX.Element {
  return (
    <Box
      maxWidth="64"
      border="1px solid"
      borderColor="red.700"
      borderRadius="4px"
    >
      <Image src={imgCountryURL} alt={city} borderTopRadius="4px" />

      <Flex align="center" justify="space-between" p="6" mt="auto">
        <Box>
          <VStack spacing="3" align="start">
            <Text fontSize="xl" fontWeight={500} lineHeight="6">
              {city}
            </Text>
            <Text fontSize="md" color="gray.500" lineHeight="7">
              {country}
            </Text>
          </VStack>
        </Box>

        <Image
          src={flagURL}
          alt={`Flag ${country}`}
          objectFit="cover"
          boxSize="30px"
          borderRadius="full"
        />
      </Flex>
    </Box>
  );
}
