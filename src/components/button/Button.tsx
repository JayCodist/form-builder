import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: MouseEventHandler;
  type?: "danger" | "transparent";
  children: ReactNode;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  type = "transparent",
  children,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, styles[type], className].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
