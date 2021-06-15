import { Flex, HStack, useBreakpointValue } from '@chakra-ui/react';

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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" flexDirection={isWideVersion ? 'row' : 'column'}>
      <TextInformation>{about}</TextInformation>

      <Flex
        flex="1"
        w="100%"
        align="center"
        justify={['space-between', 'flex-end']}
        marginLeft={['0', 'auto']}
        mt={isWideVersion ? '0' : '4'}
      >
        <HStack spacing={['5', '10']}>
          <CountCountry quantityCountry={quantity.quantityCountry} />

          <CountLanguages quantityLanquages={quantity.quantityLanquages} />

          <CountCities quantityCities={quantity.quantityCities} />
        </HStack>
      </Flex>
    </Flex>
  );
}
