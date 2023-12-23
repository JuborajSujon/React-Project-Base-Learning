import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
