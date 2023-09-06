import React from "react";

// Layout
import Header from "@Layout/Header";
import SideBar from "@Layout/SideDrawer";
import Tab from "@Layout/Tab";

// Material UI
import Paper from "@mui/material/Paper";

// Material Theme
import { withTheme as WithTheme } from "./Theme";

// ======================================================================================

type Nav = {
  children: JSX.Element[] | JSX.Element;
};
const index: React.FC<Nav> = ({ children }) => {
  return (
    <>
      <Header />

      <div style={{ padding: "50px 20px 0px 260px" }}>{children}</div>

      <SideBar />
      <Tab />
    </>
  );
};

export default WithTheme(index);
