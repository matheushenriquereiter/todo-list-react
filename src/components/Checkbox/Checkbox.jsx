import { checkbox } from "./styles.module.css";

export const Checkbox = ({ onChange, checked }) => {
  return (
    <label>
      <input
        className={checkbox}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
};
