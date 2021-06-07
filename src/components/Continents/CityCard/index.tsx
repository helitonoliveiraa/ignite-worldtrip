import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Card } from './Card';

export function CityCard(): JSX.Element {
  return (
    <Flex mt="10" w="100%">
      <SimpleGrid flex="1" minChildWidth="256px" gap="10">
        <Card
          imgCountryURL="/images/countries/londres.png"
          country="Reino Unido"
          city="Londres"
          flagURL="/images/flags/reino_unido.png"
        />

        <Card
          imgCountryURL="/images/countries/paris.png"
          country="Paris"
          city="França"
          flagURL="/images/flags/franca.png"
        />

        <Card
          imgCountryURL="/images/countries/roma.png"
          country="Roma"
          city="Itália"
          flagURL="/images/flags/italia.png"
        />

        <Card
          imgCountryURL="/images/countries/praga.png"
          country="Praga"
          city="França"
          flagURL="/images/flags/republica_tcheca.png"
        />

        <Card
          imgCountryURL="/images/countries/amsterda.png"
          country="Amsterdã"
          city="França"
          flagURL="/images/flags/holanda.png"
        />
      </SimpleGrid>
    </Flex>
  );
}
