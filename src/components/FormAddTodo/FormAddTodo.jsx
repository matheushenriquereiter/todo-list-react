import { input } from "./styles.module.css";

export const FormAddTodo = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={input}
        type="text"
        placeholder="New to do"
        name="todoName"
      />
    </form>
  );
};
