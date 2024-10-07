import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [langue, setLangue] = useState("en");

  function handelchangeLangue() {
    setLangue(langue == "en" ? "ar" : "en");
  }
  const MyTheme = createTheme({
    typography: {
      fontFamily: "ibm",
      text: {
        primary: "#e3f2fd",
        secondary: "#e8eaf6",
        dark: "#212121",
      },
    },
    palette: {
      langue: langue,
      color: {
        primary: {
          main: "#0d47a1",
          light: "#3d5afe",
          dark: "#1976d2",
          contrastText: "#fff",
        },
        secondary: {
          main: "#ce93d8",
          light: "#f3e5f5",
          dark: "#ab47bc",
        },
        info: {
          main: "#29b6f6",
          light: "#4fc3f7",
          dark: "#0288d1",
        },
      },
    },
  });
  return (
    <ThemeContext.Provider value={handelchangeLangue}>
      <ThemeProvider theme={MyTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
