import React from "react";

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  value?: string;
  required?: boolean;
};

export default function Input({
  onChange,
  placeholder,
  name,
  value,
  required,
  ...rest
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      {...rest}
    />
  );
}
