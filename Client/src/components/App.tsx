import React, { useEffect } from "react";
import MainPage from "../pages/MainPage";

import { connect } from "react-redux";
import { getRobots } from "../redux/actions";

import Layout from "../Layout/index";

const App: React.FC<any> = ({ getRobots }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getRobots();
    };

    fetchData();
  });

  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default connect(null, { getRobots })(App);
