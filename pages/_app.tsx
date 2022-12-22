import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider, HStack } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
   </ChakraProvider>
  )
}
