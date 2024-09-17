
import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
    >
      {children}
    </button>
  );
}


