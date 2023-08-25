import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch } from "react-redux";
import { getRobots } from "../Redux/robots/robotActions";

// Normal import
import Layout from "../Layout/index";
import MainPage from "../Pages/MainPage";
import { AnyAction } from "redux";

// Lazy loading
const RobotDetail = lazy(() => import("../Pages/RobotDetail"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      //@ts-ignore
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
