import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme"; // Import your theme objects
import { React, useEffect } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

// Create a custom provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light"
      ? lightTheme
      : darkTheme
  );
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.type === "light" ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    if (theme.type === "light") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
