import { Link, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type NavLinkProps = {
  children: ReactNode;
};

export function NavLink({ children }: NavLinkProps): JSX.Element {
  return (
    <Link href="teste" lineHeight="1">
      <VStack spacing={['0', '4']}>{children}</VStack>
    </Link>
  );
}
