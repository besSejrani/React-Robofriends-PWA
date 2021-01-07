import { makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { searchField } from "../redux/robots/robotActions";
import { useTheme } from "@material-ui/core/styles";

const SearchBox: FunctionComponent<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <TextField
      className={classes.root}
      id="standard-basic"
      label="Robot Search"
      onChange={(e) => dispatch(searchField(e.target.value))}
      margin="normal"
    />
  );
};

export default SearchBox;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0% 12% 10% 12%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0% 5% 20% 5%",
    },
  },
}));
