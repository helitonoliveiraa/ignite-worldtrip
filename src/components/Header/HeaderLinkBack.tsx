import { Link, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function HeaderLinkBack(): JSX.Element {
  return (
    <Link href="/" display="flex" alignItems="center">
      <Icon as={ChevronLeftIcon} w="6" h="6" position="absolute" left="5" />
    </Link>
  );
}
