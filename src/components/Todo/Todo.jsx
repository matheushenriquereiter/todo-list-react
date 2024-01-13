import { todo, trash } from "./styles.module.css";
import { Checkbox } from "../Checkbox/Checkbox";
import { Trash } from "@phosphor-icons/react";

export const Todo = ({ name, isDone, todos, setTodos }) => {
  const toggleChecked = () => {
    setTodos(
      todos.map(todo => {
        const todoCopy = { ...todo };

        if (todoCopy.name === name) {
          todoCopy.isDone = !todoCopy.isDone;
        }

        return todoCopy;
      })
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter(todo => todo.name !== name));
  };

  return (
    <li className={todo}>
      <Checkbox onChange={toggleChecked} checked={isDone} />
      <Trash onClick={deleteTodo} className={trash} size={30} color="#fff" />
      {name}
    </li>
  );
};
