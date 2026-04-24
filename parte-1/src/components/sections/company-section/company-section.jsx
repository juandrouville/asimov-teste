import { forwardRef } from "react";
import { mcn } from "../../../lib/utils";
import Marquee from "../../marquee/marquee";
import styles from "./company-section.module.css";

const CompanySection = forwardRef(({ data, ...restProps }, ref) => {
  const className = mcn([styles["company-section"], restProps.className]);

  return (
    <section ref={ref} {...restProps} className={className}>
      <Marquee
        className={styles["company-section__list"]}
        speed={25}
        pauseOnHover
      >
        {data.map(({ image, width, height, alt, url }) => (
          <a
            key={`company-list-1-${alt}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                width: `auto`,
                height: `${height}px`,
              }}
              src={image}
              width={width}
              height={height}
              alt={alt}
            />
          </a>
        ))}
      </Marquee>
      <Marquee
        className={styles["company-section__list"]}
        speed={25}
        direction="to-right"
        pauseOnHover
      >
        {data.reverse().map(({ image, width, height, alt, url }) => (
          <a
            key={`company-list-2-${alt}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                width: `auto`,
                height: `${height}px`,
              }}
              src={image}
              width={width}
              height={height}
              alt={alt}
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
});

CompanySection.displayName = "CompanySection";

export default CompanySection;