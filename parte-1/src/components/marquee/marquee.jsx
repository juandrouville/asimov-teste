import { cva } from "class-variance-authority";
import {
  Children,
  cloneElement,
  forwardRef,
  useCallback,
} from "react";
import { mcn } from "../../lib/utils";
import styles from "./marquee.module.css";

const marqueeCva = cva(styles.marquee, {
  variants: {
    pauseOnHover: {
      true: styles["marquee--pause-on-hover"],
    },
    direction: {
      "to-left": styles["marquee--direction-to-left"],
      "to-right": styles["marquee--direction-to-right"],
    },
  },
  defaultVariants: {
    pauseOnHover: false,
    direction: "to-left",
  },
});

const duplicateChildren = (children, times) => {
  const childArray = Children.toArray(children);
  const duplicatedChildren = [];
  for (let i = 0; i < times; i++) {
    duplicatedChildren.push(
      ...childArray.map((child, index) =>
        cloneElement(child, {
          key: `child-${i}-${index}`,
        })
      )
    );
  }
  return duplicatedChildren;
};

const Marquee = forwardRef(
  (
    {
      direction = "to-left",
      speed = 25,
      pauseOnHover = false,
      children,
      ...restProps
    },
    ref
  ) => {
    const className = mcn([
      marqueeCva({ direction, pauseOnHover }),
      restProps.className,
    ]);

    const childArray = Children.toArray(children);
    const childCount = childArray.length;

    let duplicatedChildren;
    if (childCount < 6) {
      const duplicateTimes = Math.ceil(12 / childCount);
      duplicatedChildren = duplicateChildren(children, duplicateTimes);
    } else {
      duplicatedChildren = childArray;
    }

    const renderMarqueeItems = useCallback(
      () => (
        <>
          {new Array(2).fill(null).map((_, i) => (
            <div
              key={`marquee-wrapper-${i}`}
              className={styles["marquee__wrapper__item"]}
              style={{ animationDuration: `${speed}s` }}
            >
              {duplicatedChildren}
            </div>
          ))}
        </>
      ),
      [speed, duplicatedChildren]
    );

    return (
      <div ref={ref} {...restProps} className={className}>
        <div className={styles["marquee__wrapper"]}>{renderMarqueeItems()}</div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;