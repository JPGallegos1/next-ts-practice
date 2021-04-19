import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import Layout from "@layout/Layout";

type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.FormEvent<HTMLInputElement>;
type InputValue = HTMLInputElement;

interface ITodos {
  text: string;
  complete: boolean;
}

function Todos(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [todos, setTodos] = useState<ITodos[]>([]);

  const addTodo = (text: string): void => {
    let todo: ITodos[] = [...todos, { text, complete: false }];
    setTodos(todo);
  };

  const completeTodo = (index: number): void => {
    let todo: ITodos[] = [...todos];
    todo[index].complete = !todo[index].complete;
    setTodos(todo);
  };

  const deleteTodo = (index: number): void => {
    let todo: ITodos[] = [...todos];
    todo.splice(index, 1);
    setTodos(todo);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTodo(query);
    setQuery("");
  };

  return (
    <Layout>
      <Heading as="h2">Week List</Heading>
      <Box my="8">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Add a task</FormLabel>
            <HStack>
              <Input
                type="text"
                required
                focusBorderColor="green.300"
                border="1px solid"
                borderColor="gray.400"
                value={query}
                onChange={(e: InputEvent): void =>
                  setQuery((e.target as InputValue).value)
                }
              />
              <Box>
                <Button size="md" colorScheme="blackAlpha" type="submit">
                  Add
                </Button>
              </Box>
            </HStack>
          </FormControl>
        </form>
      </Box>

      <Box>
        <List>
          {todos.map((todo: ITodos, index: number) => (
            <ListItem key={index}>
              <HStack>
                <Text fontSize="lg">{todo.text}</Text>
                <HStack>
                  <Box>
                    <Button
                      size="sm"
                      colorScheme="whatsapp"
                      onClick={() => completeTodo(index)}
                    >
                      {todo.complete ? "Incomplete" : "Complete"}
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => deleteTodo(index)}
                    >
                      &times;
                    </Button>
                  </Box>
                </HStack>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </Layout>
  );
}

export default Todos;
