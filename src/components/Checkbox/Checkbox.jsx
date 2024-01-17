import { checkbox } from "./styles.module.css";

export const Checkbox = ({ onChange, checked }) => {
  return (
    <input
      className={checkbox}
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
  );
};
