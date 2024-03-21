/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

//CREATE CONTEXT
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

//CREATE PROVIDER
// const TodoContextProvider = ({ children }) => {
//   const [todo, setTodo] = useState([]);

//   <TodoContext.Provider value={{ todo, setTodo }}>{children}</TodoContext.Provider>;
// };

// export { TodoContextProvider };

//HELPER
export const useTodo = () => {
  return useContext(TodoContext);
};

//CREATE PROVIDER
export const TodoProvider = TodoContext.Provider;
