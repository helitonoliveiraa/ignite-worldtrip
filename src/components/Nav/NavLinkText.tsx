import { Text } from '@chakra-ui/react';

type NavLinkTextProps = {
  children: string;
};

export function NavLinkText({ children }: NavLinkTextProps): JSX.Element {
  return (
    <Text fontSize="2xl" fontWeight="600" color="gray.700">
      {children}
    </Text>
  );
}
