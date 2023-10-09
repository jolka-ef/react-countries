import React from "react";
import "../../css/components/SwitchColorMode.css";

import { ColorModeContext } from "../context/ColorMode.js";
import { MoonIcon } from "./Icons/MoonIcon.js";
import { SunIcon } from "./Icons/SunIcon.js";

export const SwitchColorMode = () => {
  const { colorMode, switchColorMode } = React.useContext(ColorModeContext);
  const title = colorMode === "light" ? "Light Mode" : "Dark Mode";
  return (
    <button className="SwitchColorMode" onClick={switchColorMode}>
      {colorMode === "light" ? (
        <SunIcon className="SwitchColorMode-icon" />
      ) : (
        <MoonIcon className="SwitchColorMode-icon" />
      )}
      <span className="SwitchColorMode-text">{title}</span>
    </button>
  );
};
