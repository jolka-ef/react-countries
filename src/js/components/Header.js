import React from "react";
import "../../css/components/Header.css";

import { SwitchColorMode } from "./SwitchColorMode.js";

export const Header = () => {
  return (
    <>
      <div className="Header-titleContainer">
        <h1 className="Header-title">Where in the world?</h1>
        <SwitchColorMode />
      </div>
    </>
  );
};
