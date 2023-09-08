// Router
import { Navigate, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// ======================================================================================

function withPublicAuthentication(Component) {
  return function (props) {
    // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state: IAppState) => state.ui.user);

    const location = useLocation();

    if (user.isAuth && location.pathname === "/login") {
      return <Navigate to="/" replace />;
    }

    return <Component {...props} />;
  };
}

export default withPublicAuthentication;
