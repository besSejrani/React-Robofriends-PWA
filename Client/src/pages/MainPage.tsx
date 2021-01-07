import React from "react";
import { Container } from "@material-ui/core";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import { makeStyles } from "@material-ui/core/styles";

const Main: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <SearchBox />
      </Container>

      <Container>
        <CardList />
      </Container>
    </div>
  );
};

export default Main;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0px 100px 0px",
    },
  },
}));
