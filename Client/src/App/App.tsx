import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import { useDispatch } from "react-redux";
import { getRobots } from "../Redux/robots/robotActions";
import { getUser } from "../Redux/ui/uiActions";

// Normal import
import Layout from "../Layout/index";
import MainPage from "@Pages/MainPage";

// Private
import withAuthentication from "./PrivateRoute";
import withPublicAuthentication from "./PublicRoute";

// Request
import axios from "axios";

// Hooks
import useUriServer from "@Hooks/useUriServer";

// Public
const RobotDetail = lazy(() => import("@Pages/RobotDetail"));
const NotFound = lazy(() => import("@Pages/NotFound"));
const Login = lazy(() => import("@Pages/Login"));

const PublicLogin = withPublicAuthentication(Login);

// Private
const AdminChats = lazy(() => import("@Pages/Admin/Rooms"));
const AdminUsers = lazy(() => import("@Pages/Admin/Users"));

const AuthenticatedAdminChats = withAuthentication(AdminChats);
const AuthenticatedAdminUsers = withAuthentication(AdminUsers);

// ======================================================================================

const App = () => {
  const dispatch = useDispatch();

  const uri = useUriServer();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${uri}/user`, {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

        await dispatch(getUser(data));
      } catch (error) {
        console.log(error);
      }
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
            <Route path="/login" element={<PublicLogin />} />

            <Route path="/admin/rooms" element={<AuthenticatedAdminChats />} />
            <Route path="/admin/users" element={<AuthenticatedAdminUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
