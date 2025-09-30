import * as React from "react";




const Button = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <button
      className={
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 " +
        className
      }
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
