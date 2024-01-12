import { todoList } from "./styles.module.css";

import { Todo } from "../Todo/Todo";

export const TodoList = ({ todos, searchedTodos, setTodos }) => {
  return (
    <ul className={todoList}>
      {searchedTodos.map(({ name, isDone }) => (
        <Todo
          key={name}
          name={name}
          todos={todos}
          isDone={isDone}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};
