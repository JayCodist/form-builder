import { ChangeEventHandler, FunctionComponent, useState } from "react";
import styles from "./Input.module.scss";
import { isValidNumberString } from "../../utils/helpers/validators";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "number" | "text" | "color";
  className?: string;
}

const Input: FunctionComponent<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  className
}) => {
  const [errMessage, setErrMessage] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const newValue = e.target.value;
    if (type === "number") {
      // newValue = newValue.replace(/[^\d-.]/g, "");

      setErrMessage(
        isValidNumberString(newValue) ? "" : "Please enter valid number"
      );
    }
    onChange(newValue);
  };
  return (
    <div className={[styles["input-wrapper"], className].join(" ")}>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
        type={type === "number" ? "text" : type}
        autoComplete="none"
      />
      {<span className={styles["err-display"]}>{errMessage}</span>}
    </div>
  );
};

export default Input;
