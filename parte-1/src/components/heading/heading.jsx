import { cva } from "class-variance-authority";
import { forwardRef, cloneElement } from "react";
import { mcn } from "../../lib/utils";
import styles from "./heading.module.css";

const headingClasses = cva(styles.heading, {
  variants: {
    variant: {
      primary: styles["heading--primary"],
      secondary: styles["heading--secondary"],
      ghost: styles["heading--ghost"],
    },
    level: {
      1: styles["heading--level-1"],
      2: styles["heading--level-2"],
      3: styles["heading--level-3"],
      4: styles["heading--level-4"],
      p: styles["heading--level-p"],
    },
  },
  defaultVariants: {
    variant: "primary",
    level: 1,
  },
});

const Heading = forwardRef(
  ({ asChild, children, variant, level, ...restProps }, ref) => {
    const className = mcn([
      headingClasses({ variant, level }),
      restProps.className,
    ]);

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
      <h2 ref={ref} {...restProps} className={className}>
        {children}
      </h2>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;