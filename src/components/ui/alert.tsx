import React from "react";
import { cn } from "../../lib/cn";

type Variant = "default" | "success" | "error" | "warning";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export function Alert({ variant = "default", className, ...props }: AlertProps) {
  const styles: Record<Variant, string> = {
    default: "bg-gray-50 border-gray-200 text-gray-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error:   "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  };
  return (
    <div
      className={cn("rounded-md border p-3 text-sm", styles[variant], className)}
      {...props}
    />
  );
}
