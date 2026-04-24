import { cva } from "class-variance-authority";
import { forwardRef, cloneElement } from "react";
import { mcn } from "../../lib/utils";
import styles from "./button.module.css";

const buttonClasses = cva(styles.button, {
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
      outline: styles["button--outline"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = forwardRef(({ asChild, children, variant, ...restProps }, ref) => {
  const className = mcn([buttonClasses({ variant }), restProps.className]);

  if (asChild) {
    if (typeof children === "string") {
      throw new Error(
        "Children must be a React element when using the `asChild` prop."
      );
    }
    return cloneElement(children, {
      ref,
      ...restProps,
      className: mcn([className, children.props.className]),
    });
  }

  return (
    <button ref={ref} {...restProps} className={className}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;