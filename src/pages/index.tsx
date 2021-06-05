import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Nav } from '../components/Nav';

export default function Home(): JSX.Element {
  return (
    <Flex direction="column" h="100vh" w="100%">
      <Box
        backgroundImage="url('bannertop.png')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        h={368}
      >
        <Flex
          w="100%"
          maxWidth={1200}
          h="100%"
          mx="auto"
          px="5"
          align="center"
          justify="space-between"
        >
          <Box>
            <Text fontSize="4xl" color="gray.50">
              5 Continentes,
              <br /> infinitas possibilidades.
            </Text>

            <Text color="gray.300" fontSize="xl" maxWidth={524} mt="5">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image src="/assets/airplane.svg" alt="Airplane" mt="auto" mb="-10" />
        </Flex>
      </Box>

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

      <Flex w="100%" maxWidth={1200}>
        <h1>worldtrip</h1>
      </Flex>
    </Flex>
  );
}
