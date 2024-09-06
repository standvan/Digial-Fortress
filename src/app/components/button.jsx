import React from "react";

const Button = ({ title, color }) => {
  return (
    <div
      className="rounded-3xl px-3 py-2 text-white"
      style={{ backgroundColor: color }}
    >
      {title}
    </div>
  );
};

export default Button;
