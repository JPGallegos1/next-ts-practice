import type { AppProps } from "next/app";
import theme from "../chakra.config";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
