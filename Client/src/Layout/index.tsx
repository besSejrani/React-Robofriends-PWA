import React from "react";
import Appbar from "./Appbar";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";
import Tab from "./Tab";

type Nav = {
  children: JSX.Element[] | JSX.Element;
};

const index: React.FC<Nav> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Appbar />
        {children}
        <Tab />
      </ThemeProvider>
    </>
  );
};

export default index;
