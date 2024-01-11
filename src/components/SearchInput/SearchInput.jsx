import { container, input } from "./styles.module.css";

export const SearchInput = ({ onChange }) => {
  return (
    <search className={container}>
      <input
        onChange={onChange}
        className={input}
        type="text"
        placeholder="Search to do"
      />
    </search>
  );
};
