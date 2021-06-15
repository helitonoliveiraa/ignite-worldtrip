import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function BannerHome(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      backgroundImage="url('bannertop.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      h="auto"
    >
      <Flex
        w="100%"
        maxWidth={1200}
        // h="100%"
        mx="auto"
        px="5"
        py={['7', '20']}
        align="center"
        justify="space-between"
        position="relative"
      >
        <Box>
          <Text fontSize={['xl', '4xl']} fontWeight="500" color="gray.50">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>

          <Text color="gray.300" fontSize={['sm', 'xl']} maxWidth={524} mt="5">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Image
            src="/assets/airplane.svg"
            alt="Airplane"
            position="absolute"
            right="0"
            bottom="-10"
          />
        )}
      </Flex>
    </Box>
  );
}
