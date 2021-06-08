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

SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

export function Slide(): JSX.Element {
  return (
    <Box w="100%" h="100%" maxWidth={1240} mx="auto" mt="14">
      <Swiper
        style={{ width: '100%', flex: 1 }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        <SwiperSlide>
          <Flex
            textAlign="center"
            bgImage="slide.png"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            w="100%"
            h={450}
            align="center"
            justify="center"
            direction="column"
          >
            <Link href="/continent/europe">
              <a>
                <Text fontSize="5xl" fontWeight="bold" color="gray.50">
                  Europa
                </Text>
                <Text fontSize="2xl" fontWeight="bold" color="gray.300">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
