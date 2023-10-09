import React, { useState, useEffect } from "react";

export const ColorModeContext = React.createContext();

export const ColorMode = ({ children }) => {
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme:light)").matches ? "light" : "dark"
  );

  const switchColorMode = () => {
    if (colorMode === "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-colors", colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, switchColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
