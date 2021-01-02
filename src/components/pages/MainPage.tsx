import React, { useState } from "react";

import SearchBox from "../SearchBox";
import CardList from "../CardList";
import Scroll from "../Scroll";

const Main: React.FC<any> = () => {
  return (
    <div className="tc">
      <Scroll>
        <SearchBox />
        <CardList />
      </Scroll>
    </div>
  );
};

export default Main;
