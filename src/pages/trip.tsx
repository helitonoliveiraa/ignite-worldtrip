import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { CityBanner } from '../components/Continents/ContinentBanner';
import { Information } from '../components/Continents/ContinentInformation';

export default function Trip(): JSX.Element {
  return (
    <Flex direction="column" h="100vh - 24" w="100%">
      <CityBanner />

      <Box mt="20" w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
        <Information />

        <Box mt="20" mb="20">
          <Text fontSize="4xl" fontWeight={500}>
            Cidade s +100
          </Text>

          <Flex mt="10">
            <HStack spacing="10">
              <Box
                maxWidth="64"
                border="1px solid"
                borderColor="yellow.300"
                borderRadius="4px"
              >
                <Image
                  src="/images/countries/londres.png"
                  alt="londres"
                  borderTopRadius="4px"
                />

                <Flex align="center" justify="space-between" p="6">
                  <Box>
                    <VStack spacing="3" align="start">
                      <Text fontSize="xl" fontWeight={500} lineHeight="6">
                        Londres
                      </Text>
                      <Text fontSize="md" color="gray.500" lineHeight="7">
                        Reino Unido
                      </Text>
                    </VStack>
                  </Box>

                  <Image
                    src="/images/flags/reino_unido.png"
                    alt="Flag Reino Unido"
                    objectFit="cover"
                    boxSize="30px"
                    borderRadius="full"
                  />
                </Flex>
              </Box>

              <Box
                maxWidth="64"
                border="1px solid"
                borderColor="yellow.300"
                borderRadius="4px"
              >
                <Image
                  src="/images/countries/londres.png"
                  alt="londres"
                  borderTopRadius="4px"
                />

                <Flex align="center" justify="space-between" p="6">
                  <Box>
                    <VStack spacing="3" align="start">
                      <Text fontSize="xl" fontWeight={500} lineHeight="6">
                        Londres
                      </Text>
                      <Text fontSize="md" color="gray.500" lineHeight="7">
                        Reino Unido
                      </Text>
                    </VStack>
                  </Box>

                  <Image
                    src="/images/flags/reino_unido.png"
                    alt="Flag Reino Unido"
                    objectFit="cover"
                    boxSize="30px"
                    borderRadius="full"
                  />
                </Flex>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
