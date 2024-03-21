import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //all todo
  const [todos, setTodos] = useState([]);

  //addTodo
  const addTodo = (newTodo) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Date.now(), ...newTodo, completed: false },
    ]);
  };

  //update Todo
  const updateTodo = (id, newTodo) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id === id ? newTodo : todo)),
    );
  };

  //deleteTodo
  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  //toggleComplete
  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  };

  //Browser Local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
          </h1>
          <div className='mb-4'>
            {/* {TODO Form} */}
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
