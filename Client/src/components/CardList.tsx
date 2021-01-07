import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { IAppState } from "../redux/rootReducer";
import { selectFilterRobots } from "../redux/robots/robotSelector";

import { makeStyles } from "@material-ui/core";
import MaterialCard from "./MaterialCard";

const CardList: FunctionComponent<any> = () => {
  const classes = useStyles();
  const robots = useSelector((state: IAppState) => selectFilterRobots(state));

  useEffect(() => {
    cardComponent();
  }, [robots]);

  const cardComponent = () => {
    return robots.map((robot: any, i: any) => {
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
