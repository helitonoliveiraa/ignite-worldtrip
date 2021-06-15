import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

type ContinentBannerProps = {
  bannerURL: string;
  title: string;
};

export function ContinentBanner({
  bannerURL,
  title,
}: ContinentBannerProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      backgroundImage={`url(${bannerURL})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      h={[150, 500]}
    >
      {isWideVersion ? (
        <Flex w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
          <Text
            fontSize={['3xl', '5xl']}
            fontWeight={600}
            color="gray.50"
            mt="auto"
            pb="16"
          >
            {title}
          </Text>
        </Flex>
      ) : (
        <Flex
          w="100%"
          maxWidth={1200}
          h="100%"
          mx="auto"
          align="center"
          justify="center"
        >
          <Text fontSize={['3xl', '5xl']} fontWeight={600} color="gray.50">
            {title}
          </Text>
        </Flex>
      )}
    </Box>
  );
}
