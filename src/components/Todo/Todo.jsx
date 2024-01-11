import { todo } from "./styles.module.css";
import { Checkbox } from "../Checkbox/Checkbox";

export const Todo = ({ name, isDone, todos, setTodos }) => {
  const handleChange = () => {
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

  return (
    <li className={todo}>
      <Checkbox onChange={handleChange} checked={isDone} />
      {name}
    </li>
  );
};
