import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { IAppState } from "src/redux/rootReducer";

const Theme: React.FC<any> = (props) => {
  const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#1976d2",
      },
      type: isDarkTheme ? "dark" : "light",
    },
  });

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
