import React from "react";
import { Box } from "@material-ui/core";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

const Main: React.FC<any> = () => {
  return (
    <>
      <SearchBox />
      <Box>
        <CardList />
      </Box>
    </>
  );
};

export default Main;
