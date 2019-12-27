import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";

import { createTheme } from "./createTheme";

export const theme = createTheme({});

export const useThemeContext = () => useContext(ThemeContext);

export const ObjThemeProvider = props => {
  return <ThemeProvider theme={theme} {...props} />;
};
