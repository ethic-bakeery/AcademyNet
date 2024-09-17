

// Label.js
import React from "react";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block font-bold mb-1">
      {children}
    </label>
  );
}
