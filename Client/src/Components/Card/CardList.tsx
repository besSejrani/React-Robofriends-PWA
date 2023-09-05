import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";
import { selectFilterRobots } from "@Redux/robots/robotSelector";

// Components
import MaterialCard from "@Components/Card/MaterialCard";

// Material Styles
import { makeStyles } from "@mui/styles";

// ======================================================================================

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

// ======================================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardList;
