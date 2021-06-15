import { Text, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

type NavLinkTextProps = {
  children: ReactNode;
};

export function NavLinkText({ children }: NavLinkTextProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Text
      textAlign="left"
      fontSize={['md', '2xl']}
      fontWeight="600"
      color="gray.700"
    >
      {!isWideVersion && (
        <Text as="span" fontSize="7xl" color="red.700" mr="1">
          .
        </Text>
      )}
      {children}
    </Text>
  );
}
