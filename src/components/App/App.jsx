import { useState } from "react";
import { app, card, main, container, completed } from "./styles.module.css";

import { Header } from "../Header/Header";
import { FormAddTodo } from "../FormAddTodo/FormAddTodo";
import { SearchInput } from "../SearchInput/SearchInput";
import { TodoList } from "../TodoList/TodoList";

export const App = () => {
  const [todos, setTodos] = useState(
    localStorage.todos ? JSON.parse(localStorage.todos) : []
  );
  const [search, setSearch] = useState("");

  const updateLocalStorage = () => {
    localStorage.todos = JSON.stringify(todos);
  };
  updateLocalStorage();

  const handleAddTodo = event => {
    event.preventDefault();

    const form = event.target;
    const todoName = form.todoName.value.trim();
    const todoAlreadyExists = todos.some(todo => todo.name === todoName);

    form.reset();

    if (!todoName) return;

    if (todoAlreadyExists) return;

    const todo = {
      name: todoName,
      isDone: false,
    };

    setTodos([todo, ...todos]);
  };

  const handleSearchTodo = event => setSearch(event.target.value.trim());

  const getCompletedTodosAmount = () =>
    todos.reduce((acc, { isDone }) => (isDone ? acc + 1 : acc), 0);

  const getSearchedTodos = () =>
    todos.filter(todo =>
      todo.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className={app}>
      <div className={card}>
        <Header />

        <main className={main}>
          <div className={container}>
            <p className={completed}>{getCompletedTodosAmount()} Completed</p>

            <SearchInput onChange={handleSearchTodo} />
          </div>

          <TodoList
            todos={todos}
            searchedTodos={getSearchedTodos()}
            setTodos={setTodos}
          />

          <FormAddTodo onSubmit={handleAddTodo} />
        </main>
      </div>
    </div>
  );
};
