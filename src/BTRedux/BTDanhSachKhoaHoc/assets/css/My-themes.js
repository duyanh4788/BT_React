import { createMuiTheme } from "@material-ui/core";

export const themes = createMuiTheme({
  palette: {
    primary: {
      light: "#c158dc",
      main: "#8e24aa",
      dark: "#5c007a",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7543",
      main: "#d84315",
      dark: "#9f0000",
      contrastText: "#000000",
    },
  },
});
