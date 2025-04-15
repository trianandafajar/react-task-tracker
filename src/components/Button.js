import React from "react";

export const Button = ({ text, color = "bg-indigo-600", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white rounded-lg font-semibold shadow hover:opacity-90 transition duration-150 ${color}`}
    >
      {text}
    </button>
  );
};
