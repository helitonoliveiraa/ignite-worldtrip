import { Flex, Image } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { NavLinkText } from './NavLinkText';

export function Nav() {
  return (
    <Flex as="nav" justifyContent="space-between" w="100%">
      <NavLink>
        <Image src="/assets/cocktail.svg" w="21" />
        <NavLinkText>vida noturna</NavLinkText>
      </NavLink>

      <NavLink>
        <Image src="/assets/surf.svg" />
        <NavLinkText>praia</NavLinkText>
      </NavLink>

      <NavLink>
        <Image src="/assets/building.svg" />
        <NavLinkText>moderno</NavLinkText>
      </NavLink>

      <NavLink>
        <Image src="/assets/museum.svg" />
        <NavLinkText>clássico</NavLinkText>
      </NavLink>

      <NavLink>
        <Image src="/assets/earth.svg" />
        <NavLinkText>e mais...</NavLinkText>
      </NavLink>
    </Flex>
  );
}
