import React, { useEffect } from "react";
import MainPage from "../pages/MainPage";

import { connect } from "react-redux";
import { getRobots } from "../redux/robots/robotActions";

import Layout from "../Layout/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RobotDetail from "../pages/RobotDetail";

const App: React.FC<any> = ({ getRobots }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getRobots();
    };

    fetchData();
  });

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/friend/:id" component={RobotDetail} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default connect(null, { getRobots })(App);
