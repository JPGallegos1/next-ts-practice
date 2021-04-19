import { useRouter } from "next/router";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Layout from "@layout/Layout";

function Home(): JSX.Element {
  const router = useRouter();
  return (
    <Layout>
      <Heading
        as="h2"
        mb="4rem"
        pb="1rem"
        textTransform="uppercase"
        borderBottom="1px dashed"
      >
        Projects
      </Heading>
      <HStack justify="space-between">
        <Box
          boxShadow="md"
          minH="20rem"
          flex="0 0 45%"
          cursor="pointer"
          onClick={() => router.push("/todos")}
        >
          <Image
            src="/assets/todos.jpg"
            alt="todo list"
            height="20rem"
            width="100%"
          />
          <Heading
            as="h4"
            textTransform="uppercase"
            textAlign="center"
            my="2rem"
          >
            Todo List
          </Heading>
          <Text textAlign="center">Click to see the project.</Text>
        </Box>
        <Box boxShadow="md" minH="15rem" flex="0 0 45%" cursor="pointer">
          <Image
            src="/assets/rickandmorty.jpg"
            alt="todo list"
            height="20rem"
            width="100%"
          />
          <Heading
            as="h4"
            textTransform="uppercase"
            textAlign="center"
            my="2rem"
          >
            Rick and Morty
          </Heading>
          <Text textAlign="center">Soon.</Text>
        </Box>
      </HStack>
    </Layout>
  );
}

export default Home;
