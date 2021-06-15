import { Flex, SimpleGrid } from '@chakra-ui/react';

import { Card } from './Card';

type ICard = {
  image: string;
  countryName: string;
  cityName: string;
  flag: string;
};

type CityCardProps = {
  cards: ICard[];
};

export function CityCard({ cards }: CityCardProps): JSX.Element {
  return (
    <Flex mt={['5', '10']} w="100%">
      <SimpleGrid
        flex="1"
        minChildWidth="256px"
        gap={['5', '10']}
        justifyContent="center"
      >
        {cards.map(card => (
          <Card
            key={card.image}
            imgCountryURL={card.image}
            country={card.countryName}
            city={card.cityName}
            flagURL={card.flag}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
