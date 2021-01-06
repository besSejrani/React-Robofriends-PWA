import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { connect } from "react-redux";
import { toggleSideDrawer } from "../redux/ui/uiActions";
import { IAppState } from "src/redux/rootReducer";

type Anchor = "left";

const SideDrawer: React.FC<any> = ({ isSideDrawerOpen, toggleSideDrawer }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });



  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={isSideDrawerOpen} onClose={toggleSideDrawer}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

const mapState = (state: IAppState) => {
  return {
    isSideDrawerOpen: state.ui.isSideDrawerOpen,
  };
};

export default connect(mapState, { toggleSideDrawer })(SideDrawer);

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
