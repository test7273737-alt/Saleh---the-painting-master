import React from "react";

type BaseButtonType = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonType>(
  ({ className, children, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${className} cursor-pointer`}
      >
        {children}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
