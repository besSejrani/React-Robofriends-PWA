// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// Material Styles
import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ======================================================================================

const Theme: React.FC<any> = (props) => {
  const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#1976d2",
      },
    },
  });

  const theme = createTheme(getDesignTokens(isDarkTheme ? "dark" : "light"));

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
