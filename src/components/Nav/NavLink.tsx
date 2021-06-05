import { Link, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type NavLinkProps = {
  children: ReactNode;
};

export function NavLink({ children }: NavLinkProps): JSX.Element {
  return (
    <Link
      href="teste"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="5"
      borderRadius="2.5"
      _hover={{
        underline: 'none',
        bgColor: 'yellow.50',
      }}
    >
      <VStack spacing="4">{children}</VStack>
    </Link>
  );
}
