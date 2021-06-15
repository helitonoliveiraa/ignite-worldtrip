import { Image, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { NavLinkText } from './NavLinkText';

export function Nav(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <SimpleGrid
      as="nav"
      w="100%"
      minChildWidth="136px"
      minHeight="8px"
      // columns={[2, null, 3]}
      gap={['0', '2']}
      textAlign="left"
    >
      <NavLink>
        {isWideVersion && <Image src="/assets/cocktail.svg" />}
        <NavLinkText>vida noturna</NavLinkText>
      </NavLink>

      <NavLink>
        {isWideVersion && <Image src="/assets/surf.svg" />}
        <NavLinkText>praia</NavLinkText>
      </NavLink>

      <NavLink>
        {isWideVersion && <Image src="/assets/building.svg" />}
        <NavLinkText>moderno</NavLinkText>
      </NavLink>

      <NavLink>
        {isWideVersion && <Image src="/assets/museum.svg" />}
        <NavLinkText>clássico</NavLinkText>
      </NavLink>

      <NavLink>
        {isWideVersion && <Image src="/assets/earth.svg" />}
        <NavLinkText>e mais...</NavLinkText>
      </NavLink>
    </SimpleGrid>
  );
}
