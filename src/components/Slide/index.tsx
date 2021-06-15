import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/core';

import { Continent } from '../../pages/index';

SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

type SlideProps = {
  continents: Continent[];
};

export function Slide({ continents }: SlideProps): JSX.Element {
  return (
    <Box w="100%" h="100%" maxWidth={1240} mx="auto" mt={['5', '14']}>
      <Swiper
        style={{ width: '100%', flex: 1 }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <Flex
              textAlign="center"
              bgImage={continent.slideBannerURL}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              w="100%"
              h={['375px', '450px']}
              align="center"
              justify="center"
              direction="column"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Text
                    fontSize={['2xl', '5xl']}
                    fontWeight="bold"
                    color="gray.50"
                  >
                    {continent.titleSlide}
                  </Text>
                  <Text
                    fontSize={['sm', '2xl']}
                    fontWeight="bold"
                    color="gray.300"
                    // maxWidth={['70%', '90%']}
                    // textAlign="center"
                  >
                    {continent.aboutText}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
