import React from "react";
import Header from "./Header";
import { Paper } from "@material-ui/core";
import { withTheme as WithTheme } from "./Theme";
import SideBar from "./SideDrawer";
import Tab from "./Tab";

type Nav = {
  children: JSX.Element[] | JSX.Element;
};
const index: React.FC<any> = ({ children }) => {
  return (
    <>
      <Paper>
        <Header />
        {children}
      </Paper>
      <SideBar />
      <Tab />
    </>
  );
};

export default WithTheme(index);
