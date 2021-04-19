import { FC } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import Header from "@layout/Header";

function Layout({ children }): JSX.Element {
  return (
    <Box display="flex" flexDirection="column">
      <Header />
      <Container as="main" maxW="container.xl" my={8}>
        <Stack as="section" direction="column" flex="1">
          {children}
        </Stack>
      </Container>
    </Box>
  );
}

export default Layout;
