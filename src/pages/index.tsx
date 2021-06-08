import { Box, Flex, Text } from '@chakra-ui/react';
import { Slide } from '../components/Slide';
import { Nav } from '../components/Nav';
import { BannerHome } from '../components/BannerHome';

export default function Home(): JSX.Element {
  return (
    <Flex direction="column" h="100vh - 24" w="100%" mb="14">
      <BannerHome />

      <Flex
        maxWidth={1200}
        flexDirection="column"
        align="center"
        w="100%"
        mx="auto"
        px="5"
        mt="20"
      >
        <Nav />

        <Box
          mt="20"
          pt="10"
          position="relative"
          scaleX="0.6"
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            left: '40%',
            right: '40%',
            borderTop: '2px solid',
            borderColor: 'gray.700',
          }}
        >
          <Text fontSize="4xl" textAlign="center">
            Vamos nessa?{' '}
          </Text>
          <Text fontSize="4xl">Então escolha seu continente</Text>
        </Box>
      </Flex>

      <Slide />
    </Flex>
  );
}
