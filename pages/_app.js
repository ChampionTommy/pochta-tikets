// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

export const defaultTheme = extendTheme({
    styles: {
        fonts: {
            body: "system-ui, sans-serif",
            heading: "Georgia, serif",
            mono: "Menlo, monospace",
        },
        global: {
            // styles for the `body`
            body: {
                bg: '#f5f5f5',
            },
            // styles for the `a`
            a: {
                color: '#000',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
})

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp