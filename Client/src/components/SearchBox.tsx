import { makeStyles, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { searchField } from "../redux/actions";
import {theme} from "../Layout/Theme"


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
  
  const useStyles = makeStyles({
    root: {
      margin: "15% 12% 10% 12%",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]:{
        margin: "30% 6% 20% 6%",
      }
    },
  });