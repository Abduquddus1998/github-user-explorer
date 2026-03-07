import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { className, onChange, type = "text", placeholder, value, ...restProps },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, className)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    );
  },
);

Input.displayName = "Input";
