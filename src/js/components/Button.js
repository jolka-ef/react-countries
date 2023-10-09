import React from "react";

export const Button = (props) => {
  const { className, icon, name, onClick, type } = props;
  return (
    <button className={className} onClick={onClick} type={type}>
      {icon}
      <span>{name}</span>
    </button>
  );
};
