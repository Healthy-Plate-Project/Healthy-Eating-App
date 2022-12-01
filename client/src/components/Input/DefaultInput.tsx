import React from "react";

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
};

export default function Input({
  onChange,
  placeholder,
  className,
  value,
  required,
  ...rest
}: InputProps) {
  return (
    <input
      onChange={onChange}
      className={className}
      value={value}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  );
}
