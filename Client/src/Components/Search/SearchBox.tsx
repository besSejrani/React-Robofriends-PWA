import React, { FunctionComponent } from "react";

// Redux
import { useDispatch } from "react-redux";
import { searchField } from "@Redux/robots/robotActions";

// Material UI
import TextField from "@mui/material/TextField";

// Material Styles
import { makeStyles, useTheme } from "@mui/styles";

// ======================================================================================

const SearchBox: FunctionComponent<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <TextField
      fullWidth={true}
      className={classes.root}
      id="standard-basic"
      label="Robot Search"
      onChange={(e) => dispatch(searchField(e.target.value))}
      margin="normal"
    />
  );
};

export default SearchBox;

// ======================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0% 12% 10% 12%",
    justifyContent: "center",
    // [theme.breakpoints.down("sm")]: {
    //   margin: "0% 5% 20% 5%",
    // },
  },
}));
