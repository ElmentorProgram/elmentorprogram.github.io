import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "base" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "base",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  icon,
  iconPosition = "left",
  fullWidth = false,
  ...props
}) => {
  const buttonClasses = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full-width",
    loading && "btn--loading",
    disabled && "btn--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const renderIcon = () => {
    if (!icon) return null;

    return (
      <span className={`btn__icon btn__icon--${iconPosition}`}>{icon}</span>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <span className="btn__spinner" aria-hidden="true" />
          <span className="btn__text">{children}</span>
        </>
      );
    }

    return (
      <>
        {iconPosition === "left" && renderIcon()}
        <span className="btn__text">{children}</span>
        {iconPosition === "right" && renderIcon()}
      </>
    );
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      aria-disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
