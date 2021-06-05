import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';
import { HeaderLinkBack } from './HeaderLinkBack';
import { Headerlogo } from './HeaderLogo';

export function Header(): JSX.Element {
  const { asPath } = useRouter();
  return (
    <Flex as="header" w="100% - 24" h="24">
      <Flex
        maxWidth="1200"
        width="100%"
        h="24"
        mx="auto"
        px="5"
        align="center"
        justify="center"
        position="relative"
      >
        {asPath !== '/' && <HeaderLinkBack />}
        <Headerlogo />
      </Flex>
    </Flex>
  );
}
