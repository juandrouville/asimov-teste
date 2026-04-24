import { cva } from "class-variance-authority";
import { forwardRef, cloneElement } from "react";
import { mcn } from "../../lib/utils";
import styles from "./card.module.css";

const cardClasses = cva(styles.card, {
  variants: {
    variant: {
      primary: styles["card--primary"],
      secondary: styles["card--secondary"],
      tertiary: styles["card--tertiary"],
    },
    withShadow: {
      true: styles["card--shadow"],
    },
    withBorder: {
      true: styles["card--border"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Card = forwardRef(
  (
    { asChild, children, variant, withShadow, withBorder, ...restProps },
    ref
  ) => {
    const className = mcn([
      cardClasses({ variant, withShadow, withBorder }),
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
      <div ref={ref} {...restProps} className={className}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;