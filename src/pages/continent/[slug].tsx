import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';
import { CityCard } from '../../components/Continents/CityCard';
import { CityBanner } from '../../components/Continents/ContinentBanner';
import { Information } from '../../components/Continents/ContinentInformation';

type Card = {
  image: string;
  countryName: string;
  cityName: string;
  flag: string;
};

type ContinentProps = {
  continent: {
    slug: string;
    title: string;
    bannerURL: string;
    about: string;
    quantities: {
      quantityCountry: string;
      quantityLanquages: string;
      quantityCities: string;
    };
    cityCards: Card[];
  };
};

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{continent.title} | Worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh - 24" w="100%">
        <CityBanner bannerURL={continent.bannerURL} title={continent.title} />

        <Box mt="20" w="100%" maxWidth={1200} h="100%" mx="auto" px="5">
          <Information
            quantity={continent.quantities}
            about={continent.about}
          />

          <Box mt="20" mb="20">
            <Text fontSize="4xl" fontWeight={500}>
              Cidades +100
            </Text>

            <CityCard cards={continent.cityCards} />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('continent', String(slug), {});

  if (!response) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const continent = {
    slug,
    title: RichText.asText(response.data.continent),
    bannerURL: response.data.banner.url,
    about: RichText.asText(response.data.about),
    quantities: {
      quantityCountry: response.data.countries,
      quantityLanquages: response.data.languages,
      quantityCities: response.data.cities,
    },
    cityCards: response.data.city_cards.map(card => ({
      image: card.image.url,
      countryName: card.country_name,
      cityName: card.city_name,
      flag: card.flag.url,
    })),
  };

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
