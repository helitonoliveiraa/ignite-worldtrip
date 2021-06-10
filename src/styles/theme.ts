import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      800: '#2c3638',
      700: '#47585b',
      600: '#6f8a8f',
      500: '#999999',
      300: '#DADADA',
      50: '#F5F8FA',
    },
    red: {
      700: '#C10C2E',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700',
      },
    },
  },
});
