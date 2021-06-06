import { Box, Flex, Text } from '@chakra-ui/react';

export function CityBanner(): JSX.Element {
  return (
    <Box
      backgroundImage="url('europe_banner.png')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      h={500}
    >
      <Flex w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
        <Text fontSize="5xl" fontWeight={600} color="gray.50" mt="auto" pb="16">
          Europa
        </Text>
      </Flex>
    </Box>
  );
}
