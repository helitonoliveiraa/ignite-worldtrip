import { Link, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function HeaderLinkBack(): JSX.Element {
  return (
    <Link
      href="/"
      display="flex"
      alignItems="center"
      _hover={{
        opacity: '0.7',
      }}
    >
      <Icon as={ChevronLeftIcon} w="8" h="8" position="absolute" left="5" />
    </Link>
  );
}
