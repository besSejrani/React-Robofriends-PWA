import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch } from "react-redux";
import { getRobots } from "../Redux/robots/robotActions";

// Normal import
import Layout from "../Layout/index";
import MainPage from "@Pages/MainPage";

// Lazy loading
const RobotDetail = lazy(() => import("@Pages/RobotDetail"));
const NotFound = lazy(() => import("@Pages/NotFound"));
const Login = lazy(() => import("@Pages/Login"));
const AdminChats = lazy(() => import("@Pages/Admin/Rooms"));
const AdminUsers = lazy(() => import("@Pages/Admin/Users"));

// ======================================================================================

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
      <Layout>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/friend/:id" element={<RobotDetail />} />
            <Route path="/login" element={<Login />} />

            <Route path="/admin/rooms" element={<AdminChats />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
