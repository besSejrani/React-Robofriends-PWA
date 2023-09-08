import React from "react";

// Layout
import Header from "@Layout/Header";
import SideBar from "@Layout/SideDrawer";
import Tab from "@Layout/Tab";

// Material UI
import { Box } from "@mui/material";

// Material Theme
import { withTheme as WithTheme } from "./Theme";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// ======================================================================================

type Nav = {
  children: JSX.Element[] | JSX.Element;
};
const Layout = ({ children }) => {
  const user = useSelector((state: IAppState) => state.ui.user);

  return (
    <>
      <Header />

      {user.isAuth ? (
        <Box>
          <div style={{ padding: "50px 20px 0px 260px" }}>{children}</div>

          <SideBar />
        </Box>
      ) : (
        <Box>{children}</Box>
      )}
      <Tab />
    </>
  );
};

export default WithTheme(Layout);
