import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp