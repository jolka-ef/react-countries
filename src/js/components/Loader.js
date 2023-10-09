import React from "react";
import "../../css/components/Loader.css";

export const Loader = () => {
  return (
    <svg className="Loader" viewBox="0 0 50 50">
      <circle
        className="Loader-circle "
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};
