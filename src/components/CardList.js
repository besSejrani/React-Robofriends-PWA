import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = () => {
    return robots.map((robot, i) => (
      <Card
        key={robot.id}
        name={robots[i].name}
        email={robots[i].email}
        id={robots[i].id}
      />
    ));
  };

  return <div>{cardComponent()}</div>;
};

export default CardList;
