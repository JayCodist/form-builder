import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: MouseEventHandler;
  /**
   * Defaults to `transparent` with minimal styling
   */
  type?: "transparent" | "danger";
  children: ReactNode;
  className?: string;
  dataTestId?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  type = "transparent",
  children,
  className,
  dataTestId
}) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, styles[type], className].join(" ")}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
