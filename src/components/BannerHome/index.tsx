import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function BannerHome(): JSX.Element {
  return (
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
  );
}
