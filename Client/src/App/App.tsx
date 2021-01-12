import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { getRobots } from "../redux/robots/robotActions";

// Normal import
import Layout from "../Layout/index";
import MainPage from "../pages/MainPage";

// Lazy loading
const RobotDetail = lazy(() => import("../pages/RobotDetail"));

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRobots());
    };

    fetchData();
  });

  return (
    <Router>
      <Switch>
        <Layout>
          <Suspense fallback={<CircularProgress />}>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/friend/:id" component={RobotDetail} />
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
