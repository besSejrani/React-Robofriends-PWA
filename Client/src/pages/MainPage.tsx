import React from "react";
import { Container } from "@material-ui/core";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

const Main: React.FC<any> = () => {
  return (
    <>
      <Container>
        <SearchBox />
      </Container>

      <Container>
        <CardList />
      </Container>
    </>
  );
};

export default Main;
