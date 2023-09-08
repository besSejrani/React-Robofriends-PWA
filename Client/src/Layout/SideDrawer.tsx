import React from "react";

// React DOM
import { Link } from "react-router-dom";

// Material UI
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

// Material Styles
import { makeStyles } from "@mui/styles";

// Icons
import { MdPeopleOutline, MdOutlineChat } from "react-icons/md";

// ======================================================================================

type Anchor = "left";

const SideDrawer: React.FC<any> = () => {
  const classes = useStyles();

  const list = (anchor: Anchor) => (
    <Box>
      <Toolbar />

      <div className={classes.list}>
        <List subheader={<ListSubheader>Management</ListSubheader>}>
          <Link to="/admin/rooms" style={{ textDecoration: "none" }}>
            <ListItem>
              <MdOutlineChat size={25} style={{ margin: "0rem 0.5rem 0rem 0rem" }} />
              <Typography>Rooms</Typography>
            </ListItem>
          </Link>

          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <ListItem>
              <MdPeopleOutline size={25} style={{ margin: "0rem 0.5rem 0rem 0rem" }} />
              <Typography>Users</Typography>
            </ListItem>
          </Link>
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer variant="permanent" anchor={anchor}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideDrawer;

// ======================================================================================

const useStyles = makeStyles({
  list: {
    width: 200,
  },
});
