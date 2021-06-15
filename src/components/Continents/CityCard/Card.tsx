import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      mx={isWideVersion ? '0' : 'auto'}
      maxWidth={['90%', '64']}
      border="1px solid"
      borderColor="red.700"
      borderRadius="4px"
      cursor="pointer"
      boxShadow="lg"
      rounded="md"
      bg="white"
      zIndex="5"
      transition="all 0.1s"
      _hover={{
        boxShadow: '2xl',
        opacity: '0.9',
      }}
    >
      <Image
        src={imgCountryURL}
        alt={city}
        borderTopRadius="4px"
        objectFit="cover"
        w="100%"
      />

      <Flex align="center" justify="space-between" p="6">
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
