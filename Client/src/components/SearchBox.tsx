import { makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { searchField } from "../redux/actions";

const useStyles = makeStyles({
  root: {
    margin: "15% 25% 0% 25%",
    display: "flex",
    justifyContent: "center",
  },
});

const SearchBox: FunctionComponent<any> = ({ searchField }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      id="standard-basic"
      label="Robot Search"
      onChange={(e) => searchField(e.target.value)}
      margin="normal"
    />
  );
};

export default connect(null, { searchField })(SearchBox);
