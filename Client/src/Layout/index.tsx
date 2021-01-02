import React from "react";
import Appbar from "./Appbar";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";

type Nav = {
  children: JSX.Element[] | JSX.Element;
};

const index: React.FC<Nav> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Appbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default index;
