// Input.js
import React from "react";

export function Input({ id, name, type, value, onChange, placeholder, ariaInvalid }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={ariaInvalid}
      className="border rounded p-2 w-full"
    />
  );
}