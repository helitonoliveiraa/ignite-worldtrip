import { Box, Flex, Text } from '@chakra-ui/react';

type CityBannerProps = {
  bannerURL: string;
  title: string;
};

export function CityBanner({ bannerURL, title }: CityBannerProps): JSX.Element {
  return (
    <Box
      backgroundImage={`url(${bannerURL})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      h={500}
    >
      <Flex w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
        <Text fontSize="5xl" fontWeight={600} color="gray.50" mt="auto" pb="16">
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
