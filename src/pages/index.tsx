import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';
import Prismic from '@prismicio/client';

import { Slide } from '../components/Slide';
import { Nav } from '../components/Nav';
import { BannerHome } from '../components/BannerHome';
import { getPrismicClient } from '../services/prismic';

export type Continent = {
  slug: string;
  titleSlide: string;
  aboutText: string;
  slideBannerURL: string;
};

type HomeProps = {
  continents: Continent[];
};

export default function Home({ continents }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

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

        <Slide continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'continent')],
    {
      fetch: [
        'continent.banner_slide',
        'continent.slide_title',
        'continent.slide_about_text',
      ],
    },
  );

  const continents = response.results.map(continent => ({
    slug: continent.uid,
    titleSlide: continent.data.slide_title,
    aboutText: continent.data.slide_about_text,
    slideBannerURL: continent.data.banner_slide.url,
  }));

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
