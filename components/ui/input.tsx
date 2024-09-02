
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(      
          "h-auto w-full border-0 bg-inherit text-xs placeholder:font-instrument placeholder:text-sm placeholder:font-normal placeholder:not-italic  placeholder:opacity-80 focus-visible:outline-none !focus:outline-[0px] !outline-[0px] focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 !border-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
