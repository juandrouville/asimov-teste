import { cva } from "class-variance-authority";
import { forwardRef, cloneElement } from "react";
import { mcn } from "../../lib/utils";
import styles from "./button-icon.module.css";

const buttonClasses = cva(styles["button-icon"], {
  variants: {
    variant: {
      primary: styles["button-icon--primary"],
      "primary-alt": styles["button-icon--primary-alt"],
      "primary-plain": styles["button-icon--primary-plain"],
      secondary: styles["button-icon--secondary"],
      "secondary-alt": styles["button-icon--secondary-alt"],
      "secondary-plain": styles["button-icon--secondary-plain"],
      ghost: styles["button-icon--ghost"],
      "ghost-alt": styles["button-icon--ghost-alt"],
      "ghost-plain": styles["button-icon--ghost-plain"],
      outline: styles["button-icon--outline"],
    },
    iconOnly: {
      true: styles["button-icon--icon-only"],
    },
    rotateArrowAnimation: {
      true: styles["button-icon--rotate-arrow"],
    },
  },
  defaultVariants: {
    variant: "primary",
    iconOnly: undefined,
    rotateArrowAnimation: undefined,
  },
});

const ButtonIcon = forwardRef(
  (
    {
      variant,
      icon,
      asChild,
      children,
      iconOnly,
      rotateArrowAnimation,
      ...restProps
    },
    ref
  ) => {
    const className = mcn([
      buttonClasses({
        variant,
        iconOnly,
        rotateArrowAnimation,
      }),
      restProps.className,
    ]);

    if (asChild) {
      if (typeof children === "string") {
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      }
      return cloneElement(children, {
        ...restProps,
        ref,
        className: mcn([className, children.props.className]),
        children: (
          <>
            <div className={styles["button-icon__icon"]}>{icon}</div>
            <span className={styles["button-icon__label"]}>
              {children.props.children}
            </span>
          </>
        ),
      });
    }

    return (
      <button ref={ref} {...restProps} className={className}>
        <div className={styles["button-icon__icon"]}>{icon}</div>
        <span className={styles["button-icon__label"]}>{children}</span>
      </button>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;