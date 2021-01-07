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
    <div className={classes.container}>
      <TextField
        className={classes.root}
        id="standard-basic"
        label="Robot Search"
        onChange={(e) => dispatch(searchField(e.target.value))}
        margin="normal"
      />
    </div>
  );
};

export default SearchBox;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "10% 12% 10% 12%",
    [theme.breakpoints.down("sm")]: {
      margin: "10% 0% 20% 0%",
    },
  },
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));
