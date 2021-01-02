import React, { FunctionComponent } from "react";
import Card from "./Card";
import { connect } from "react-redux";

type CardListProps = {
  robots: any[];
  searchField: string;
};

const CardList: FunctionComponent<CardListProps> = ({ robots, searchField }) => {
  const filteredRobots = () => {
    return robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  };

  console.log("filter", filteredRobots());

  const cardComponent = () => {
    return filteredRobots().map((robot, i) => {
      console.log("bla", robot);
      return <Card key={robot.id} name={robots[i].name} email={robots[i].email} id={robots[i].id} />;
    });
  };

  return <div>{cardComponent()}</div>;
};

const mapState = (state: any) => {
  return {
    searchField: state.search.search,
    robots: state.robots.robots,
  };
};

export default connect(mapState)(CardList);
