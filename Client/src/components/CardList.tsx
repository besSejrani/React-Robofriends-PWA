import React, { FunctionComponent } from "react";

import { useSelector } from "react-redux";
import { IAppState } from "../redux/rootReducer";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import MaterialCard from "./MaterialCard";

const CardList: FunctionComponent<any> = () => {
  const classes = useStyles();
  const searchField = useSelector((state: IAppState) => state.search.search);
  const robots = useSelector((state: IAppState) => state.robots.robots);

  const filteredRobots = () => {
    return robots.filter((robot: any) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  };

  const cardComponent = () => {
    return filteredRobots().map((robot: any, i: any) => {
      return (
        <Link to={`/friend/${robot.id}`} key={robot.id} style={{ textDecoration: "none" }}>
          <MaterialCard name={robots[i].name} id={robots[i].id} />
        </Link>
      );
    });
  };

  return <div className={classes.root}>{cardComponent()}</div>;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardList;
