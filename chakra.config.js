import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: "Manrope, sans-serif",
        bg: "gray.200",
      },
    }),
  },
  components: {},
  colors: {},
});

export default theme;
