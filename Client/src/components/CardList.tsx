import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";

import { connect } from "react-redux";
import MaterialCard from "./MaterialCard";

type CardListProps = {
  robots: any[];
  searchField: string;
};

const CardList: FunctionComponent<CardListProps> = ({ robots, searchField }) => {
  const classes = useStyles();

  const filteredRobots = () => {
    return robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  };

  const cardComponent = () => {
    return filteredRobots().map((robot, i) => {
      console.log("bla", robot);
      return <MaterialCard key={robot.id} name={robots[i].name} email={robots[i].email} id={robots[i].id} />;
    });
  };

  return <div className={classes.root}>{cardComponent()}</div>;
};

const mapState = (state: any) => {
  return {
    searchField: state.search.search,
    robots: state.robots.robots,
  };
};

export default connect(mapState)(CardList);

const useStyles = makeStyles({
  root: {
    margin: "5% 20% 5% 20%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
