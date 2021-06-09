import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';

import { CityCard } from '../../components/Continents/CityCard';
import { CityBanner } from '../../components/Continents/ContinentBanner';
import { Information } from '../../components/Continents/ContinentInformation';

export default function Trip(): JSX.Element {
  return (
    <>
      <Head>
        <title>Continent | Worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh - 24" w="100%">
        <CityBanner />

        <Box mt="20" w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
          <Information />

          <Box mt="20" mb="20">
            <Text fontSize="4xl" fontWeight={500}>
              Cidade s +100
            </Text>

            <CityCard />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
