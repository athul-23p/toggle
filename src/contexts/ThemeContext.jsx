import { useState, createContext } from "react";
import theme from "../theme";

const ThemeContext = createContext();

const ThemContextProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState({
    selected: "light",
    theme,
  });

  const handleTheme = () => {
    if (activeTheme.selected === "light") {
      setTheme({
        selected: "dark",
        theme,
      });
    } else {
      setTheme({
        selected: "light",
        theme,
      });
    }
  };
  return (
    <ThemeContext.Provider value={{ activeTheme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemContextProvider, ThemeContext };
