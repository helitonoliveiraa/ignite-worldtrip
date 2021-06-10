import { Flex, HStack } from '@chakra-ui/react';

import { CountCities } from './CountCities';
import { CountCountry } from './CountCountry';
import { CountLanguages } from './CountLanguages';
import { TextInformation } from './TextInformation';

type InformationProps = {
  about: string;
  quantity: {
    quantityCountry: string;
    quantityLanquages: string;
    quantityCities: string;
  };
};

export function Information({
  quantity,
  about,
}: InformationProps): JSX.Element {
  return (
    <Flex align="center">
      <TextInformation>{about}</TextInformation>

      <Flex flex="1" align="center" justify="flex-end" marginLeft="auto">
        <HStack spacing="10">
          <CountCountry quantityCountry={quantity.quantityCountry} />

          <CountLanguages quantityLanquages={quantity.quantityLanquages} />

          <CountCities quantityCities={quantity.quantityCities} />
        </HStack>
      </Flex>
    </Flex>
  );
}
