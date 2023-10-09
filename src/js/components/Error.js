import React from "react";
import "../../css/components/Error.css";

import { ErrorIcon } from "./Icons/ErrorIcon.js";

export const Error = ({ message }) => {
  return (
    <p className="Error">
      <ErrorIcon className="Error-icon" />
      <span className="Error-text">{message}</span>
    </p>
  );
};
