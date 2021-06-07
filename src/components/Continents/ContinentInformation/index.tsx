import { Flex, HStack } from '@chakra-ui/react';
import { CountCities } from './CountCities';
import { CountCountry } from './CountCountry';
import { CountLanguages } from './CountLanguages';
import { TextInformation } from './TextInformation';

export function Information(): JSX.Element {
  return (
    <Flex align="center">
      <TextInformation />

      <Flex flex="1" align="center" justify="flex-end" marginLeft="auto">
        <HStack spacing="10">
          <CountCountry />

          <CountLanguages />

          <CountCities />
        </HStack>
      </Flex>
    </Flex>
  );
}
