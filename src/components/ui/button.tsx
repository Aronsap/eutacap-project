import * as React from "react";

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "rounded-md font-medium transition-colors focus:outline-none " +
    "focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none";

  const variantCls: Record<ButtonVariant, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizeCls: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10 p-0 inline-flex items-center justify-center",
  };

  return (
    <button
      className={`${base} ${variantCls[variant]} ${sizeCls[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
