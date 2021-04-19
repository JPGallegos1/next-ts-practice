import { useState } from "react";
import { useRouter } from "next/router";
import { HStack, Heading, Box, Text, Container } from "@chakra-ui/react";

function Header(): JSX.Element {
  const router = useRouter();

  const handleRouting = (): void => {
    router.route !== "/" ? router.push("/") : null;
  };
  return (
    <Container
      as="header"
      maxW="100%"
      height="3rem"
      boxShadow="md"
      centerContent
    >
      <HStack
        justify="space-between"
        align="center"
        width="container.xl"
        height="100%"
      >
        <Box>
          <Heading
            as="h1"
            fontSize="lg"
            textTransform="uppercase"
            cursor="pointer"
            onClick={() => handleRouting()}
          >
            Juan Pablo Galegos
          </Heading>
        </Box>
        <Box>
          <Text>Made with React, Nextjs, TypeScript, Chakra UI</Text>
        </Box>
      </HStack>
    </Container>
  );
}

export default Header;
