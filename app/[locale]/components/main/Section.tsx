import React from "react";

type SectionType = {
  className?: string;
  children?: React.ReactNode;
};

const Section = React.forwardRef<HTMLElement, SectionType>(
  ({ className, children }, ref) => {
    return (
      <section ref={ref} className={`${className}`}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
