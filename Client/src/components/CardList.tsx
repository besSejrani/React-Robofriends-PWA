import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { IAppState } from "../redux/reducers";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
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
      return (
        <Link to={`/friend/${robot.id}`} key={robot.id} style={{ textDecoration: "none" }}>
          <MaterialCard name={robots[i].name} email={robots[i].email} id={robots[i].id} />
        </Link>
      );
    });
  };

  return <div className={classes.root}>{cardComponent()}</div>;
};

const useStyles = makeStyles({
  root: {
    margin: "5% 0% 5% 0%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapState = (state: IAppState) => {
  return {
    searchField: state.search.search,
    robots: state.robots.robots,
  };
};

export default connect(mapState)(CardList);
